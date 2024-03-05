import { SlHandbag } from 'react-icons/sl';
import { useAddToCart } from '../hooks/useAddToCart';
import { useCart } from '../hooks/useCart';
import { useUpdateCart } from '../hooks/useUpdateCart';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

function AddToCartButton({ product }) {
    const { addToCart } = useAddToCart();
    const { updateProduct } = useUpdateCart();
    const { cart } = useCart();

    const { product_img, product_title, product_price, id } = product;

    return (
        <div className="col-2  d-flex justify-content-center align-items-center">
            <span
                role="button"
                onClick={() => {
                    cart?.find((cartPro) => cartPro.product_id === product.id)
                        ? updateProduct({ product_id: id })
                        : addToCart({
                              product: {
                                  product_img,
                                  product_title,
                                  product_price,
                                  product_id: id,
                                  count: 1,
                              },
                          });
                }}
                className="fs-4"
            >
                <SlHandbag title="Add To Cart" />
            </span>
        </div>
    );
}

export default AddToCartButton;
