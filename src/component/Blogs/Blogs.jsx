import React from 'react';
import './Blogs.css'
import { Button, Card } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
const Blogs = ({ chef }) => {
  const { name, gender, picture, age, recipes, likes, _id } = chef
  return (
    <div className=''>
      <Card style={{ width: '18rem' }}>
        <Card.Img className='imgc' src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Years of experience: {age} years</p>
            <p>Numbers of recipes: {recipes} </p>
            <p>Likes:  {likes}</p>
          </Card.Text>

          <NavLink to={`recipies/${_id}`}><Button className='button1' >View Recipies</Button></NavLink>

        </Card.Body>
      </Card>
    </div>
  );
};

export default Blogs;