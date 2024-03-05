import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../services/apiProducts';

export function useProducts() {
    const { data: products, isLoading } = useQuery({
        queryFn: () => getAllProducts({ type: 'suit' }),
        queryKey: ['All-products'],
    });

    return { products, isLoading };
}
