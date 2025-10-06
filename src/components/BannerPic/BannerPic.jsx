import React from 'react'

const BannerPic = ({ img }) => {

    const bgImage = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };


    return (
        <div style={bgImage} className="h-[200px] md:h-[400px] w-full" ></div>
    )
}

export default BannerPic