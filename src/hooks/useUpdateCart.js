import { useMutation } from '@tanstack/react-query';
import { updateCart } from '../services/apiCart';
import { toast } from 'react-hot-toast';
export function useUpdateCart() {
    const { mutate: updateProduct, isLoading } = useMutation({
        mutationFn: updateCart,
        onSuccess: () => {
            toast.success('product count update successfully');
        },
    });
    return { updateProduct, isLoading };
}
