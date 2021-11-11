import React from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Shop from '../Shop/Shop';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Shop/>
            <Review/>
        </div>
    );
};

export default HomePage;