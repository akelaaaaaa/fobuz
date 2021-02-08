import React from 'react'
import './news-card.css'

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const NewsCard = ({title, text, date, img}) => { 
  return (
    <>
      <Card className = 'my-card'>
        <CardImg top src={img} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>{text}</CardText>
          <CardText>
            <small className="text-muted">{date}</small>
          </CardText>
        </CardBody>
      </Card>
    </>
  )
}

export default NewsCard