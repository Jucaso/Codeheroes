import React, {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './styles/niveles_partes.css';
import Cookies from 'universal-cookie';
import Nav from "./navbar.js";
import { motion } from 'framer-motion';

export default function Nivel_2_partes() {

    const cookies = new Cookies();
    const [estrella1, setEstrella1] = useState(0);
    const [estrella2, setEstrella2] = useState(0);
    const [estrella3, setEstrella3] = useState(0);

    const mostrar = [
        {id: 0, fuente: "https://cdn.discordapp.com/attachments/981331949501181962/991133839424499772/ceroestrella1.png"},
        {id: 1, fuente: "https://cdn.discordapp.com/attachments/981331949501181962/991133840284336149/unaestrella1.png"},
        {id: 2, fuente: "https://cdn.discordapp.com/attachments/981331949501181962/991133839965565008/dosestrellas1.png"},
        {id: 3, fuente: "https://cdn.discordapp.com/attachments/981331949501181962/991133839621636186/tresestrellas1.png"},
    ]

    async function getData(){
        try {
            const request = await fetch("http://127.0.0.1:8000/usuarios/"+cookies.get('idUsuarioStats')+"/");
            const data = await request.json();
            console.log(data);
            var vector = []; 
            for (let i = 0; i < data.nivel_2.length; i++) {
                if (data.nivel_2[i] != ',') {
                    vector.push(data.nivel_2[i]);
                }
            }
            console.log("vector[0]: ", vector[0]);
            setEstrella1(vector[0]);
            setEstrella2(vector[1]);
            setEstrella3(vector[2]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <motion.div 
        
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={ {x: window.innerWidth, transition: {duration: 1}}}
        
        >

     <div className='fondoiniciojajaNP'>
        <Nav/>
        <div className="contenidoInicioNP2">
            <div className="imageninicioNP">
                <img className="img-fluid"  width="600px" 
                        src="https://cdn.discordapp.com/attachments/981331949501181962/990359249840390244/Sin_titulo6.png"/>
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
                    <div>
                        <img className="img-fluid fotico" width="110px" src={mostrar[estrella1].fuente}/>
                    </div>
                    <img className='ImagenMapaInicioNP' width='150px' src="https://media.discordapp.net/attachments/981331949501181962/990273487660798012/unknown.png" />
                </Card.Body>
                <Link to="/nivel_2_parte1" className="btn button6 type1">
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
                    <div>
                        <img className="img-fluid fotico" width="110px" src={mostrar[estrella2].fuente}/>
                    </div>
                    <img className='ImagenMapaInicioNP' width='150px' src="https://media.discordapp.net/attachments/981331949501181962/990273487660798012/unknown.png" />
                </Card.Body>
                <Link to="/nivel_2_parte2" className="btn button6 type1">
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
                    <div>
                        <img className="img-fluid fotico" width="110px" src={mostrar[estrella3].fuente}/>
                    </div>
                    <img className='ImagenMapaInicioNP' width='150px' height="140px" src="https://media.discordapp.net/attachments/981331949501181962/989959945418047568/Sin_titulo4.png?width=473&height=473" />
                </Card.Body>
                <Link to="/nivel_2_parte3" className="btn button6 type1">
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
