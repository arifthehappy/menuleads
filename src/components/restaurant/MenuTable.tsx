import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import type { Tables } from '../../lib/supabase';

interface MenuTableProps {
  items: Tables['restaurant_menu']['Row'][];
  onEdit: (item: Tables['restaurant_menu']['Row']) => void;
  onDelete: (id: string) => void;
}

const MenuTable: React.FC<MenuTableProps> = ({ items, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{item.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{item.category}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">${item.price.toFixed(2)}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-500 truncate max-w-xs">
                  {item.description}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => onEdit(item)}
                  className="text-primary-900 hover:text-primary-700 mr-4"
                >
                  <Edit2 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuTable;