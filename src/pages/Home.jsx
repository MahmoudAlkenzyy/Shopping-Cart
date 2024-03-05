import { useProducts } from './../hooks/useProducts';
import Slider from '../ui/Slider';
import { useAccessories } from '../hooks/useAccessories';
import Spinner from '../ui/Spinner';
import HomeHero from '../ui/HomeHero';

export default function Home() {
    const { products, isLoading } = useProducts();
    const { accessories, isLoading: isGetting } = useAccessories();

    if (isLoading || isGetting) return <Spinner />;
    return (
        <>
            <HomeHero />
            <div className="container py-5">
                <Slider products={products} />
                <Slider products={accessories} />
            </div>
        </>
    );
}
