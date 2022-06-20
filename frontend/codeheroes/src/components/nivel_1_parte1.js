import React, { useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import './styles/n1p1.css'
export default function Nivel_1_parte1() {


    useEffect(() => {
        getData();
    }, []);

    async function getData(){
        try {
            const request = await fetch('http://127.0.0.1:8000/usuarios/');
            const data = await request.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <div className='container n1p1contenedor'>
            <h1 className="n1p1titulo">Teoría #1 - Variables y operciones aritméticas</h1> 
            <Accordion className="n1p1acordeon" defaultActiveKey="0">
            <Accordion.Item className="n1p1Aitem"eventKey="0">
            <Accordion.Header className="n1p1Aheader">Breve descripción de python</Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>

    );
}