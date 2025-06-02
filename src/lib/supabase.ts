import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Tables = {
  restaurant_menu: {
    Row: {
      id: string;
      user_id: string;
      name: string;
      description: string | null;
      price: number;
      category: string;
      created_at: string;
      updated_at: string;
    };
    Insert: Omit<Tables['restaurant_menu']['Row'], 'id' | 'created_at' | 'updated_at'>;
    Update: Partial<Tables['restaurant_menu']['Insert']>;
  };
};