import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://irzsekssjsubyhbozntx.supabase.co';
export const img_base_url =
    'https://irzsekssjsubyhbozntx.supabase.co/storage/v1/object/public/products/';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyenNla3NzanN1YnloYm96bnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1Mjg3NTUsImV4cCI6MjAyNTEwNDc1NX0.6wr9tra7CCtd76F3sFxBumSPlQHATPQ-0XnRnPTZWn0';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
