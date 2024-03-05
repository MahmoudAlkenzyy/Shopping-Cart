import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addToCart as apiAddToCart } from '../services/apiCart';
import { toast } from 'react-hot-toast';

export function useAddToCart() {
    const queryClient = useQueryClient();
    const { mutate: addToCart, isLoading } = useMutation({
        mutationFn: apiAddToCart,
        onSuccess: (data) => {
            toast.success(`${data[0].product_title} add successfully`);
            queryClient.invalidateQueries({
                queryKey: ['cart'],
            });
        },
        onError: (err) => {
            toast.error(err);
        },
    });
    return { addToCart, isLoading };
}
