import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Player = ({image, name, age=30, team, nationality, number }) => {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{age}</Card.Text>
        <Card.Text>{team}</Card.Text>
        <Card.Text>{nationality}</Card.Text>
        <Card.Text>{number}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Player