import React, {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './styles/niveles_partes.css';
import Cookies from 'universal-cookie';
import Nav from "./navbar.js";
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

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

    function comprobacionfinal(puntos){
        if(puntos === 300)
        {
        Swal.fire({
            title: '¡Genial! ¡Te has pasado el juego!',
            width: 700,
            icon: 'success',
            iconColor: 'green',
            padding: '20px',
            color: '#2c7d71',
            background: 'radial-gradient(circle, rgba(217,218,238,1) 0%, rgba(189,189,198,1) 71%)',
            // eslint-disable-next-line no-multi-str
            html: ' \
                    </br> </br>\
                    <a type="button" class="btn btn-success" href="/creditos"> CONTINUAR </a> ',
            showConfirmButton: false,
            })
        }
        try {
            fetch("http://127.0.0.1:8000/usuarios/"+cookies.get('idUsuarioStats')+"/", {
            'method':'PUT',
            headers: {
                'Content-Type':'application/json',           
            }, 
            body:JSON.stringify({puntaje: 301,
                                user: cookies.get('idUsuario')
                                })
            })
        } catch (error) {
            console.log(error);
        } 

    }


    async function getData(){
        try {
            const request = await fetch("http://127.0.0.1:8000/usuarios/"+cookies.get('idUsuarioStats')+"/");
            const data = await request.json();
            console.log(data);
            var vector = []; 
            for (let i = 0; i < data.nivel_3.length; i++) {
                if (data.nivel_3[i] != ',') {
                    vector.push(data.nivel_3[i]);
                }
            }
            console.log("vector[0]: ", vector[0]);
            setEstrella1(vector[0]);
            setEstrella2(vector[1]);
            setEstrella3(vector[2]);
            comprobacionfinal(data.puntaje);
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
        <div className="contenidoInicioNP3">
            <div className="imageninicioNP">
                <img className="img-fluid"  width="600px" 
                        src="https://cdn.discordapp.com/attachments/981331949501181962/990356042456105010/Sin_titulo5.png"/>
            </div>
        <div className="DerechaInicioNP">
            <div className="CampañaInicioNP">
            <div className="MapaInicioNP">
                <Card className="TituloMapaInicioNP" style={{ width: '15rem', height: '27rem' }}>
                
                <Card.Body className="bodycardinicioNP">
                    <Card.Title className='TituloNP'>TEORÍA</Card.Title>
                    <Card.Text className="DescripcionNP">
                    ¡Aquí esta el manual de instrucciones!
                        vamos a leerlo para pasar las pruebas sin problemas.
                    </Card.Text>
                    <div>
                        <img className="img-fluid fotico" width="110px" src={mostrar[estrella1].fuente}/>
                    </div>
                    <img className='ImagenMapaInicioNP' width='130px' src="https://media.discordapp.net/attachments/981331949501181962/991191047499681923/1900182.png?width=473&height=473" />
                </Card.Body>
                <Link to="/nivel_3_parte1" className="btn button5 type1">
                            ¡VAMOS!
                </Link>
                </Card>  
                </div>
                <div className="MapaInicioNP">
                <Card className="TituloMapaInicioNP" style={{ width: '15rem', height: '27rem' }}>
                
                <Card.Body className="bodycardinicioNP">
                    <Card.Title className='TituloNP'>QUIZ</Card.Title>
                    <Card.Text className="DescripcionNP">
                    ¡Pongamos en practica los conceptos adquiridos!
                    esto te servirá mucho para la prueba final.
                    </Card.Text>
                    <div>
                        <img className="img-fluid fotico" width="110px" src={mostrar[estrella2].fuente}/>
                    </div>
                    <img className='ImagenMapaInicioNP' width='130px' src="https://media.discordapp.net/attachments/981331949501181962/991192275533176852/19001821.png?width=473&height=473" />
                </Card.Body>
                <Link to="/nivel_3_parte2" className="btn button5 type1">
                            ¡VAMOS!
                </Link>
                </Card>  
                </div>
                <div className="MapaInicioNP">
            <Card className="TituloMapaInicioNP" style={{ width: '15rem', height: '27rem' }}>
           
                <Card.Body className="bodycardinicioNP">
                    <Card.Title className='TituloNP'>PRUEBA</Card.Title>
                    <Card.Text className="DescripcionNP">
                    Para esta misión se requiere una función que nos determine el precio de las manzanas espaciales.
                    </Card.Text>
                    <div>
                        <img className="img-fluid fotico" width="110px" src={mostrar[estrella3].fuente}/>
                    </div>
                    <img className='ImagenMapaInicioNP' width='130px' height="130px" src="https://media.discordapp.net/attachments/981331949501181962/991199194117324831/190018210.png?width=473&height=473" />
                </Card.Body>
                <Link to="/nivel_3_parte3" className="btn button5 type1">
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
