import React, { useState } from 'react'
import './NewsCard.css'
import {
    Card, CardImg, CardText, CardBody, CardTitle,
    Modal, ModalHeader, ModalBody
} from 'reactstrap';



const NewsCard = ({ title, text, date, img }) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    return (
        <Card>
            <CardImg top width="100%" src={img} alt="Card image cap" onClick={toggle} className="cursor" />
            <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardText>
                    <small className="text-muted">{date}</small>
                </CardText>
            </CardBody>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} close={closeBtn}>{title}</ModalHeader>
                <ModalBody>
                    {text}
                </ModalBody>
            </Modal>
        </Card>
    )
}

export default NewsCard