import React from 'react';
import BlogCard from "./BlogCard";
import Img1 from '../../assets/places/blog-1.jpg';
import Img2 from '../../assets/places/blog-2.jpg';
import Img3 from '../../assets/places/blog-3.jpeg';


const BlogsData = [
    {
        id: 1,
        image: Img1,
        title: "Chinese tourists in Antarctica",
        description: "What does it mean to work as a polar guide for Chinese guests on cruise vessels?",
        author: "Artem Rabogoshvili",
        date: "December 14, 2024",

    },

    {
        id: 2,
        image: Img2,
        title: "The multiple faces of Bejing",
        description: "My experience of living and working in China: what doesn't kill you makes you stronger",
        author: "Artem Rabogoshvili",
        date: "December 15, 2024",

    },

    {
        id: 3,
        image: Img3,
        title: "Harbin, the most Russian city in China",
        description: "History of the Russian community in the center of Heilongjiang Province",
        author: "Artem Rabogoshvili",
        date: "December 16, 2024",


    },

]

const BlogsComp = () => {
    return (
        <>
            <div className='dark:bg-gray-900 dark:text-white py-10'>
                <section data-aos="fade-up" className='container'>
                    <h1 className='border-l-8 border-primary/50 pl-2 text-3xl font-bold my-8 py-2'>Our Latest Blogs</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                        {BlogsData.map((item) => (
                            <BlogCard key={item.id} {...item} />
                        ))}

                    </div>
                </section>


            </div>
        </>
    )
}

export default BlogsComp