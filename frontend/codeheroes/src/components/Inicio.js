import React from 'react';
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './styles/Inicio.css';
import Nav from "./navbar.js";

export default function Inicio() {
    return (
        <div>
        <Nav/>
    <div className='container mt-5'>
        
        <div className='row ms-4'>
            <div className='col-sm'>
            <Card className='cardHeight cardbackground' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://media.discordapp.net/attachments/981331949501181962/988637239405862962/ddddd.png?width=630&height=473" height="290px" />
                <Card.Body>
                    <Card.Title>[inserte nombre aqui]</Card.Title>
                
                <ListGroup className="list-group-flush cardbackground">
                    <ListGroupItem className="cardbackground">Nivel actual: </ListGroupItem>
                    <ListGroupItem className="cardbackground">Estrellas: </ListGroupItem>
                    <ListGroupItem className="cardbackground">Campaña completada: </ListGroupItem>
                </ListGroup>
                </Card.Body>
            </Card>
            </div>
            <div className='col-sm'>
            <Card className='cardHeight cardbackground' style={{ width: '18rem' }}>
                <Card.Img className="imagen" variant="top" src="https://cdn.discordapp.com/attachments/981331949501181962/988634710857101312/flujo-diseno-codigo-binario_53876-118589.jpg" />
                <Card.Body>
                <Card.Title>Campaña</Card.Title>
                <Card.Text>
                    Prepárate para iniciar la campaña con la cual aprenderas mientras te diviertes!
                </Card.Text>
                <Link to={"/mapa"} className="btn btncito--3 buttonback">Iniciar</Link>
                </Card.Body>
            </Card>
            </div>
            <div className='col-sm'>
            <Card className='cardHeight cardbackground' style={{ width: '18rem' }}>
                <Card.Img className="imagen" variant="top" src="https://media.discordapp.net/attachments/981331949501181962/988643412527939604/store.png?width=513&height=473" />
                <Card.Body>
                <Card.Title>Tienda</Card.Title>
                <Card.Text>
                    Canjea tus estrellas por tus avatars favoritos!
                </Card.Text>
                <Link to={"/tienda"} className='mt-4 btn btncito--3 buttonback'>Ingresar</Link>
                </Card.Body>
            </Card>
            </div>
        </div>
    </div>
    </div>
    );
}
