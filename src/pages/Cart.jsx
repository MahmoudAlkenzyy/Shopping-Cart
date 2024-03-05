import { useCart } from '../hooks/useCart';
import { useDeleteFromCart } from '../hooks/useDeleteFromCart';
import { formatCurrency } from '../services/helpers';
import { img_base_url } from '../services/supabase';
import CartEmpty from '../ui/CartEmpty';
import CartHero from '../ui/CartHero';
import Spinner from '../ui/Spinner';

export default function Cart() {
    const { cart, isLoading } = useCart();
    const { removeProduct } = useDeleteFromCart();
    if (isLoading) return <Spinner />;
    return (
        <>
            <CartHero />
            {!cart.length ? (
                <CartEmpty />
            ) : (
                <div className="container ">
                    <div className="row py-5  gap-3 ">
                        <div className="row pb-3 px-0 text-uppercase fw-bold">
                            <div className="col-6 px-0  offset-2 ">Product</div>
                            <div className="col-1 px-0 ">Price</div>
                            <div className="col-1 px-0 ">Quantity</div>
                            <div className="col-1 px-0 ">subtotal</div>
                        </div>
                        {cart?.map((pro, idx) => {
                            return (
                                <div key={idx} className="row ">
                                    <div className="col-1 d-flex justify-content-center align-items-center">
                                        <span
                                            role="button"
                                            onClick={() =>
                                                removeProduct({
                                                    product_id: pro.product_id,
                                                })
                                            }
                                        >
                                            &#10006;
                                        </span>
                                    </div>
                                    <div className="col-1 ">
                                        <img
                                            className="w-100"
                                            src={` ${img_base_url}${pro.product_img}`}
                                            alt={pro.product_title}
                                        />
                                    </div>
                                    <div className="col-6  d-flex  align-items-center">
                                        {pro.product_title}
                                    </div>
                                    <div className="col-1 d-flex justify-content-center price position-relative align-items-center">
                                        {formatCurrency(pro.product_price)}
                                    </div>
                                    <div className="col-1 text-secondary ps-4 pe-0 d-flex justify-content-center align-items-center">
                                        <p className=" bg-white p-4 py-3 ">
                                            {pro.count}
                                        </p>
                                    </div>
                                    <div className="col-1 d-flex justify-content-center  position-relative align-items-center">
                                        {formatCurrency(
                                            pro.product_price * pro.count
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
}
