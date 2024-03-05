import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../services/apiProducts';

export function useAccessories() {
    const { data: accessories, isLoading } = useQuery({
        queryFn: () => getAllProducts({ type: 'accessories' }),
        queryKey: ['All-accesories'],
    });

    return { accessories, isLoading };
}
