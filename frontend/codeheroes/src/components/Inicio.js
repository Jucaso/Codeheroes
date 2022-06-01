import React from 'react';
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import './styles/Inicio.css';

export default function Inicio() {

    return (
    <div className='container mt-5'>
        <div className='row ms-4'>
            <div className='col-sm'>
            <Card className='cardHeight' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://media.discordapp.net/attachments/981331949501181962/981374664809017434/avatar.jpg" />
                <Card.Body>
                    <Card.Title>[inserte nombre aqui]</Card.Title>
                
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Nivel actual: </ListGroupItem>
                    <ListGroupItem>Estrellas: </ListGroupItem>
                    <ListGroupItem>Campaña completada: </ListGroupItem>
                </ListGroup>
                </Card.Body>
            </Card>
            </div>
            <div className='col-sm'>
            <Card className='cardHeight' style={{ width: '18rem' }}>
                <Card.Img className="imagen" variant="top" src="https://img.freepik.com/foto-gratis/nombre-lenguaje-python-parentesis-programa-sobre-fondo-morado-3d_327483-704.jpg" />
                <Card.Body>
                <Card.Title>Campaña</Card.Title>
                <Card.Text>
                    Prepárate para iniciar la campaña con la cual aprenderas mientras te diviertes!
                </Card.Text>
                <Button variant="primary">Iniciar</Button>
                </Card.Body>
            </Card>
            </div>
            <div className='col-sm'>
            <Card className='cardHeight' style={{ width: '18rem' }}>
                <Card.Img className="imagen" variant="top" src="https://global-uploads.webflow.com/5f5cc8ba1cb029d559cdb37a/6112642b7e7382090eef0b66_seller-icon-purple.svg" />
                <Card.Body>
                <Card.Title>Tienda</Card.Title>
                <Card.Text>
                    Canjea tus estrellas por tus avatars favoritos!
                </Card.Text>
                <Button className='mt-4' variant="primary">Ingresar</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    </div>
    );


}
