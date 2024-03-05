import { Link } from 'react-router-dom';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';

export default function CartEmpty() {
    return (
        <div className="container py-5  text-white fw-semibold text-center">
            <p className="bg-main p-3 text-start">
                <MdOutlineRemoveShoppingCart size={40} /> Your Cart is currently
                empty
            </p>

            <Link
                className="p-3  bg-dark-subtle text-uppercase text-decoration-none text-white"
                to="/"
            >
                Return to shop
            </Link>
        </div>
    );
}
