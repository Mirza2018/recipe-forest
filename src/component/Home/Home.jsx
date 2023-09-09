import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';
import './Home.css'
const Home = () => {
    const chefs = useLoaderData()
    return (
        <div className='grid-layout'>              
                {
                    chefs.map(chef => <Blogs key={chef._id} chef={chef}></Blogs>)
                }
        </div>
    );
};

export default Home;