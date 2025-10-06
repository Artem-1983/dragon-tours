import React from 'react';
import PlaceCard from './PlaceCard'
import Img1 from '../../assets/places/Beijing.jpg';
import Img2 from '../../assets/places/Pudong.jpg';
import Img3 from '../../assets/places/Shaolin.jpg';
import Img4 from '../../assets/places/Leshan.jpg';
import Img5 from '../../assets/places/Hangzhou.jpg';
import Img6 from '../../assets/places/Xishuangbanna.jpg';


const PlacesData = [

    {
        img: Img1,
        title: "Tiananmen",
        location: "Beijing",
        description: 'Discover the capital of China and historical legacy',
        price: 2500,
        type: 'Cultural',
    },

    {
        img: Img2,
        title: "Pudong District",
        location: "Shanghai",
        description: 'Feel the vibe of the most cosmopolitan city of China',
        price: 2500,
        type: 'Cultural',
    },

    {
        img: Img3,
        title: "Shaolin Monastery",
        location: "Henan Province",
        description: "Master the basics of Chinese martial art in Shaolin",
        price: 4000,
        type: 'Cultural',
    },

    {
        img: Img4,
        title: "Leshan Giant Buddha",
        location: "Sichuan Province, China",
        description: "Visit the holy site of Buddhism in Sichuan Province",
        price: 3500,
        type: 'Cultural',
    },

    {
        img: Img5,
        title: "Western Lake and Hangzhou",
        location: "Zhejiang, China",
        description: 'Savour the culinary traditions of Zhejiang Province',
        price: 2000,
        type: 'Cultural',

    },

    {
        img: Img6,
        title: "Xishuangbanna",
        location: "Yunnan, China",
        description: 'Travel to the most colorful region of China for leisure and pleasure ',
        price: 4000,
        type: 'Cultural',
    },
]



const Places = ({ handleOrderPopup }) => {
    return (
        <>
            <div className='dark:bg-gray-900 dark:text-white bg-gray-50 py-10'>
                <section className="container">
                    <h1 className='my-8 text-3xl font-bold border-l-8 border-primary/50 pl-2'>Best Places to Visit</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        {PlacesData.map((item, index) => (
                            <PlaceCard
                                handleOrderPopup={handleOrderPopup}
                                key={index}
                                {...item}


                            />

                        ))}
                    </div>
                </section>
            </div>






        </>
    )
}

export default Places