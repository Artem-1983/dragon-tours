import React from 'react';
import Hero from '../components/Hero/Hero';
import Video from '../assets/video/main.mp4';
import Places from '../components/Places/Places';
import BannerPic from '../components/BannerPic/BannerPic';
import BannerImg from '../assets/banner-1.jpg';
import BlogsComp from '../components/Blogs/BlogsComp';
import Banner from '../components/Banner/Banner';
import BannerImg2 from '../assets/banner-2.jpg'
import Testimonial from '../components/Testimonial/Testimonial'
import OrderPopup from "../components/OrderPopup/OrderPopup";



const Home = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };

    return (
        <>
            <div>
                <div className='h-[700px] relative'>
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
                    >
                        <source src={Video} type="video/mp4" />
                    </video>
                    <Hero />
                </div>
                <Places handleOrderPopup={handleOrderPopup} />
                <BannerPic img={BannerImg} />
                <BlogsComp />
                <Banner />
                <BannerPic img={BannerImg2} />
                <Testimonial />
                <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

            </div>






        </>
    )
}

export default Home