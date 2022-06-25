import React  from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './styles/niveles_partes.css';
import Nav from "./navbar.js";
import { motion } from 'framer-motion';

export default function Nivel_1_partes() {
    return (
        <motion.div 
        
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={ {x: window.innerWidth, transition: {duration: 1}}}
    
        >

     <div className='fondoiniciojajaNP'>
        <Nav/>
        <div className="contenidoInicioNP">
            <div className="imageninicioNP">
                <img className="img-fluid"  width="600px" 
                        src="https://cdn.discordapp.com/attachments/981331949501181962/990355748733202513/Sin_titulo2.png"/>
            </div>
        <div className="DerechaInicioNP">
            <div className="CampañaInicioNP">
            <div className="MapaInicioNP">
                <Card className="TituloMapaInicioNP" style={{ width: '15rem', height: '27rem' }}>
                
                <Card.Body className="bodycardinicioNP">
                    <Card.Title className='TituloNP'>TEORÍA</Card.Title>
                    <Card.Text className="DescripcionNP">
                    Prepárate para iniciar la campaña con la cual aprenderás mientras te diviertes!
                    </Card.Text>
                    <img className='ImagenMapaInicioNP' width='150px' src="https://media.discordapp.net/attachments/981331949501181962/990273487660798012/unknown.png" />
                </Card.Body>
                <Link to="/nivel_1_parte1" className="btn button5 type1">
                            ¡VAMOS!
                </Link>
                </Card>  
                </div>
                <div className="MapaInicioNP">
                <Card className="TituloMapaInicioNP" style={{ width: '15rem', height: '27rem' }}>
                
                <Card.Body className="bodycardinicioNP">
                    <Card.Title className='TituloNP'>QUIZ</Card.Title>
                    <Card.Text className="DescripcionNP">
                    Prepárate para iniciar la campaña con la cual aprenderás mientras te diviertes!
                    </Card.Text>
                    <img className='ImagenMapaInicioNP' width='150px' src="https://media.discordapp.net/attachments/981331949501181962/990273487660798012/unknown.png" />
                </Card.Body>
                <Link to="/nivel_1_parte2" className="btn button5 type1">
                            ¡VAMOS!
                </Link>
                </Card>  
                </div>
                <div className="MapaInicioNP">
            <Card className="TituloMapaInicioNP" style={{ width: '15rem', height: '27rem' }}>
           
                <Card.Body className="bodycardinicioNP">
                    <Card.Title className='TituloNP'>PRUEBA</Card.Title>
                    <Card.Text className="DescripcionNP">
                    Canjea tus estrellas por tus avatars favoritos!
                    </Card.Text>
                    <img className='ImagenMapaInicioNP' width='150px' height="140px" src="https://media.discordapp.net/attachments/981331949501181962/989959945418047568/Sin_titulo4.png?width=473&height=473" />
                </Card.Body>
                <Link to="/nivel_1_parte3" className="btn button5 type1">
                    ¡VAMOS!
                    </Link>
                </Card> 
                </div>
            </div>
            
            </div>

        </div>
            
    
    </div>
                
            
        </motion.div>
    );
}
