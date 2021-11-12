import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Shop from '../Shop/Shop';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Shop/>
            <Review/>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;