import React from 'react';
import "./Cart.css"
import { ListGroup } from 'react-bootstrap';
import { Rating } from '@mui/material';
const Cart = ({recipi}) => {
    const { recipeName, ingredients, cookingMethod, rating } = recipi;
    return (
        <div className='container border border-info rounded-3 p-5 my-4 bg-blue-300 bg-gradient container-it'>
            <h1 className='fw-bold'>Racipie Name: {recipeName} .</h1>
            <h2 className='fw-bolder pt-4 pb-2'>Ingredients :</h2>
            <ListGroup as="ol" numbered>
                {
                    ingredients.map(item => <ListGroup.Item as="li">{item}</ListGroup.Item>)
                }
            </ListGroup>

            <h3 className='pt-4' > <span className='fw-bolder'>Cooking Method: </span>{cookingMethod}</h3>

            <div className='pt-4'>
            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
            </div>

        </div>
    );
};

export default Cart;