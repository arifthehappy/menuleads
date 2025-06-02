import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import type { Tables } from '../../lib/supabase';
import MenuTable from './MenuTable';
import MenuForm from './MenuForm';
import toast from 'react-hot-toast';

const MenuManagement: React.FC = () => {
  const [items, setItems] = useState<Tables['restaurant_menu']['Row'][]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Tables['restaurant_menu']['Row'] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMenuItems();
    const subscription = supabase
      .channel('restaurant_menu_changes')
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: 'restaurant_menu' 
      }, handleChange)
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleChange = (payload: any) => {
    if (payload.eventType === 'INSERT') {
      setItems(prev => [...prev, payload.new]);
    } else if (payload.eventType === 'DELETE') {
      setItems(prev => prev.filter(item => item.id !== payload.old.id));
    } else if (payload.eventType === 'UPDATE') {
      setItems(prev => prev.map(item => 
        item.id === payload.new.id ? payload.new : item
      ));
    }
  };

  const fetchMenuItems = async () => {
    try {
      const { data, error } = await supabase
        .from('restaurant_menu')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      console.error('Error fetching menu items:', error);
      toast.error('Failed to load menu items');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (data: Omit<Tables['restaurant_menu']['Row'], 'id' | 'created_at' | 'updated_at' | 'user_id'>) => {
    try {
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) throw new Error('No user found');

      if (editingItem) {
        const { error } = await supabase
          .from('restaurant_menu')
          .update({
            ...data,
            updated_at: new Date().toISOString(),
          })
          .eq('id', editingItem.id);

        if (error) throw error;
        toast.success('Menu item updated successfully');
      } else {
        const { error } = await supabase
          .from('restaurant_menu')
          .insert([{
            ...data,
            user_id: user.id,
          }]);

        if (error) throw error;
        toast.success('Menu item added successfully');
      }

      setIsFormOpen(false);
      setEditingItem(null);
    } catch (error) {
      console.error('Error saving menu item:', error);
      toast.error('Failed to save menu item');
    }
  };

  const handleEdit = (item: Tables['restaurant_menu']['Row']) => {
    setEditingItem(item);
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
      const { error } = await supabase
        .from('restaurant_menu')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Menu item deleted successfully');
    } catch (error) {
      console.error('Error deleting menu item:', error);
      toast.error('Failed to delete menu item');
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Menu Management</h2>
        <button
          onClick={() => {
            setEditingItem(null);
            setIsFormOpen(true);
          }}
          className="btn btn-primary flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Menu Item
        </button>
      </div>

      {isFormOpen ? (
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-6">
            {editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}
          </h3>
          <MenuForm
            initialData={editingItem || undefined}
            onSubmit={handleSubmit}
            onCancel={() => {
              setIsFormOpen(false);
              setEditingItem(null);
            }}
          />
        </div>
      ) : (
        <MenuTable
          items={items}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default MenuManagement;