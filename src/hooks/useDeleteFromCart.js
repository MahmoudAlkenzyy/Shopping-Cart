import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeFromCart } from '../services/apiCart';
import { toast } from 'react-hot-toast';

export function useDeleteFromCart() {
    const queryClient = useQueryClient();
    const { mutate: removeProduct, isLoading } = useMutation({
        mutationFn: removeFromCart,
        onSuccess: (data) => {
            toast.success('product remove success');
            queryClient.invalidateQueries({
                queryKey: ['cart'],
            });
        },
        onError: (err) => {
            toast.error(err);
        },
    });
    return { removeProduct, isLoading };
}
