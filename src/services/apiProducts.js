import supabase from './supabase.js';

export async function getAllProducts({ type }) {
    const { data: products, error } = await supabase
        .from('Products')
        .select('*')
        .eq('type', type);

    if (error) {
        throw new Error(error.message);
    }
    return products;
}
