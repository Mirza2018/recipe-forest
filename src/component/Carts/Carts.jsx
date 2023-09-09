import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';
import useTitle from '../hooks/useTitle';

const Carts = () => {
    const carts = useLoaderData();
    useTitle('All Recipies')
    return (
        <div>{
            carts.map(recipi => <Cart key={recipi.id} recipi={recipi}> </Cart>)
        }
        </div>
    );
};

export default Carts;