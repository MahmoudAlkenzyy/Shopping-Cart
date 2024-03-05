import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { formatCurrency } from '../services/helpers';
import AddToCartButton from './AddToCartButton';
import { img_base_url } from '../services/supabase';

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
function Slider({ products }) {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                spaceBetween={50}
                slidesPerView={4}
            >
                {products?.map((pro, idx) => {
                    return (
                        <SwiperSlide className="slide" key={idx}>
                            {/* <p>{}</p> */}
                            <figure className="bg-main position-relative">
                                <img
                                    className="w-100"
                                    src={`${img_base_url}${pro.product_img}`}
                                />
                                <figcaption className=" p-2">
                                    <div className="row">
                                        <div className="col-10 ">
                                            <h6 className="fs-7">
                                                {pro.product_title}
                                            </h6>
                                            <span className="h5">
                                                {formatCurrency(
                                                    pro.product_price
                                                )}
                                            </span>
                                        </div>
                                        <AddToCartButton product={pro} />
                                    </div>
                                </figcaption>
                            </figure>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}

export default Slider;
