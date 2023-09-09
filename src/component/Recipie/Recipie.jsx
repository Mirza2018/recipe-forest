import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import './Recipie.css'
import { MdFavorite } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import { Rating } from '@mui/material';

const Recipie = ({ recipi }) => {
    const [fav, setFav] = useState(false)
    const { recipeName, ingredients, cookingMethod, rating } = recipi;

    const notify = () =>
    {
        toast('Added Your Favorate!', {
            icon: '❤️',
          });
    }

    for (const item of ingredients) {
        item;
    }
    const notify2 = () =>
    {
        toast.error('Removed From Favorate!');
    }

    for (const item of ingredients) {
        item;
    }


    return (
        <div className='container border border-info rounded-3 p-5 my-4 bg-blue-300 bg-gradient container-it'>
             <Toaster />
            <h1 className='fw-bold'>Racipie Name : {recipeName} .</h1>
            <h2 className='fw-bolder pt-4 pb-2'>Ingredients :</h2>
            <ListGroup as="ol" numbered>
                {
                    ingredients.map(item => <ListGroup.Item as="li">{item}</ListGroup.Item>)
                }
            </ListGroup>

            <h3 className='pt-4' > <span className='fw-bolder'>Cooking Method: </span>{cookingMethod}</h3>

            <div className='pt-4 d-flex justify-content-between'>
                <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                
                <div id="liveAlertPlaceholder">
                    {
                        fav ?
                                <MdFavorite onClick={() => {setFav(!fav);notify2()}} className='text-red-600 h2'>
                                </MdFavorite>
                            : <MdFavorite onClick={() => { setFav(!fav); notify() }} className='h2' ></MdFavorite>

                    }


                </div>
            </div>

        </div>
    );
};

export default Recipie;