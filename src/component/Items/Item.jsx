import React from 'react';
import { ListGroup } from 'react-bootstrap';
import useTitle from '../hooks/useTitle';


const Item = ({ recipi }) => {
    const { recipeName, ingredients, cookingMethod, rating } = recipi;


    useTitle('login')


    return (
        <div className='container border border-info rounded-3 p-5 my-4 bg-warning .bg-gradient container-it'>
            <h1 className='fw-bold'>Racipie Name: {recipeName} .</h1>
            <h2 className='fw-bolder pt-4 pb-2'>Ingredients :</h2>
            <ListGroup as="ol" numbered>
                {
                    ingredients.map(item => <ListGroup.Item as="li">{item}</ListGroup.Item>)
                }
            </ListGroup>

            <h3 className='pt-4' > <span className='fw-bolder'>Cooking Method: </span>{cookingMethod}</h3>

            <div className='pt-4'>
                rating :{rating}
                icon
            </div>

        </div>
    )
};

export default Item;