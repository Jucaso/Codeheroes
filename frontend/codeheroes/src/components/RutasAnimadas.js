import React from 'react';
import Login from './Login';
import Nivel_1_partes from './nivel_1_partes';
import Nivel_1_parte1 from './nivel_1_parte1';
import Nivel_1_parte2 from './nivel_1_parte2';
import Nivel_1_parte3 from './nivel_1_parte3';
import Nivel_2_partes from './nivel_2_partes';
import Nivel_2_parte1 from './nivel_2_parte1';
import Nivel_2_parte2 from './nivel_2_parte2';
import Nivel_2_parte3 from './nivel_2_parte3';
import Nivel_3_partes from './nivel_3_partes';
import Nivel_3_parte1 from './nivel_3_parte1';
import Nivel_3_parte2 from './nivel_3_parte2';
import Nivel_3_parte3 from './nivel_3_parte3';
import Onboarding from './Onboarding';
import Juego from './Juego';
import Inicio from './Inicio';
import Mapa from './mapa';
import Tienda from './Tienda';
import Prueba from './Prueba';
import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';



export default function RutasAnimadas(){
    const location = useLocation();
        return (  
            <AnimatePresence> {/* se usa para animar las rutas */}
                     {/* navbar iria aqui cuando login sirva */}
                    <Routes location={location} key={location.pathname}>
                        <Route  path = "/nivel_1_partes" element = {<Nivel_1_partes/>}/>
                        <Route  path = "/nivel_1_parte1" element = {<Nivel_1_parte1/>}/>
                        <Route  path = "/nivel_1_parte2" element = {<Nivel_1_parte2/>}/>
                        <Route  path = "/nivel_1_parte3" element = {<Nivel_1_parte3/>}/>
                        <Route  path = "/nivel_2_partes" element = {<Nivel_2_partes/>}/>
                        <Route  path = "/nivel_2_parte1" element = {<Nivel_2_parte1/>}/>
                        <Route  path = "/nivel_2_parte2" element = {<Nivel_2_parte2/>}/>
                        <Route  path = "/nivel_2_parte3" element = {<Nivel_2_parte3/>}/> 
                        <Route  path = "/nivel_3_partes" element = {<Nivel_3_partes/>}/> 
                        <Route  path = "/nivel_3_parte1" element = {<Nivel_3_parte1/>}/>
                        <Route  path = "/nivel_3_parte2" element = {<Nivel_3_parte2/>}/>
                        <Route  path = "/nivel_3_parte3" element = {<Nivel_3_parte3/>}/>
                        <Route  path = "/tienda" element = {<Tienda/>}/>          
                        <Route  path = "/login" element = {<Login/>}/>
                        <Route  path = "/" element = {<Onboarding/>}/>
                        <Route  path = "/juego" element = {<Juego/>}/>
                        <Route  path = "/inicio" element = {<Inicio/>}/>
                        <Route  path = "/mapa" element = {<Mapa/>}/>
                        <Route  path = "/prueba" element = {<Prueba/>}/>
                    </Routes>
            </AnimatePresence>
        );
    }

 
