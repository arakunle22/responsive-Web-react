import React from 'react';
// import { Link } from 'react-router-dom';
import Hero from '../home/Hero';
import Format from '../layout/Format';
import Companies from '../home/Companies';
import Features from '../home/Features';
import Choose from '../home/Choose';
import Discovery from '../home/Discovery';


const Home = () => {
    return (
        <Format>
            {/* <Link to="/product">Go to Product</Link> */}
            {/* Hero section */}
            <Hero />
            <Companies />
            <Features />
            <Choose />
            <Discovery />
        </Format>
    );
};

export default Home;
