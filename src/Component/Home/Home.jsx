import React from 'react';
import FAQ from './FAQ';
import Banner from './Banner';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Review></Review>
            <FAQ></FAQ>
        </div>
    );
}

export default Home;
