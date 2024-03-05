import supabase from './supabase';

export async function getCart() {
    const { data, error } = await supabase.from('Cart').select('*');
    if (error) throw new Error(error.message);
    return data;
}

export async function addToCart({ product }) {
    const { data, error } = await supabase
        .from('Cart')
        .insert(product)
        .select();
    if (error) throw new Error(error.message);

    return data;
}

export async function updateCart({ product_id }) {
    const { data: cart, error } = await supabase
        .from('Cart')
        .select('count')
        .eq('product_id', product_id);

    const { data, error: error2 } = await supabase
        .from('Cart')
        .update({ count: cart[0].count + 1 })
        .eq('product_id', product_id)
        .select();
    if (error || error2) throw new Error(error.message || error2.message);
    return data;
}

export async function removeFromCart({ product_id }) {
    const { error, data } = await supabase
        .from('Cart')
        .delete()
        .eq('product_id', product_id);
    if (error) throw new Error(error.message);
    return data;
}
