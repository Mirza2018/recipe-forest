import React, { useContext, useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Authprovider from '../../provider/Authprovider';
import Recipie from '../Recipie/Recipie';
import useTitle from '../hooks/useTitle';

const Recipies = () => {
    const recipiesAll = useLoaderData();
    useTitle('Recipies')
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://server-recipie-forest-mirza2018.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])


    const needData = data.find(d => d._id == recipiesAll[0].category)


    if (!needData) {
        return <div>Loding!!!</div>
    }
    console.log(data);
    console.log("sds", needData);
    const { name, picture, age, recipes, likes, _id } = needData;

    return (
        <div>
            <header style={{ paddingLeft: 0 }}>
                <div
                    className='p-5 text-center bg-image'
                    style={{ backgroundImage: "url('https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
                >
                    <div className='d-flex justify-content-center align-items-center h-100'>

                        <div className='text-white'>
                            <center><img style={{ width: 150 }} src={picture} alt="" /></center>
                            <h1 className='mb-3'>{name} </h1>
                            <h4 className='mb-3'>Years of experience: {age} years</h4>
                            <h4 className='mb-3'>Numbers of recipes: {recipes} </h4>
                            <h4>Likes: {likes}</h4>
                        </div>
                    </div>
                </div>
            </header>


            {
                recipiesAll.map(recipi => <Recipie key={recipi.id} recipi={recipi}> </Recipie>)
            }
        </div>
    );

};

export default Recipies;