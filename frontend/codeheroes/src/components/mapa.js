import React, { useState, useEffect } from "react";
import "./styles/mapa.css";
import Nav from "./navbar.js";
import { motion } from 'framer-motion';
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

var contador=0;
var iniciar=0;
var link="";
const v=document.getElementById("v");
const Mapa = () => {
    const cookies = new Cookies();
    let navigate = useNavigate();
    const [style, setStyle] = useState("volar");
    const[puntaje, setPuntaje] = useState(0);
    useEffect(() => {

        loadUserStats();
    }, []);

    async function loadUserStats() {
        try {
            const request = await fetch("http://127.0.0.1:8000/usuarios/"+cookies.get('idUsuarioStats')+"/");
            const data = await request.json();
            console.log("Puntaje:",data.puntaje);
            setPuntaje(data.puntaje);

        } catch (error) {
            console.log(error);
        }
    }

    function derecha(){ 
        if(contador<=2){
            contador++;
        }
        //console.log("contador:",contador);
        if(contador==0){
            setStyle("volar");               
        }  
        else{
            setStyle("volar"+contador);
        }                          
    }

    function izquierda(){   
        if(contador>0){
            contador--;
        } 
        //console.log("contador:",contador);  
        if(contador==0){
            setStyle("volar");        
        }  
        else{         
            setStyle("volar"+contador);
        }                     
    }

    const seleccionar = () => {
        if(contador==1){
            navigate("/nivel_1_partes");
            contador=0;
        }
        if(contador==2){
            if(puntaje>=60){
                contador=0;
                navigate("/nivel_2_partes");
            }
            else{
                Swal.fire({
                    title: 'Necesitas 60 puntos o más para acceder a este planeta.',
                    width: 400,
                    icon: 'warning',
                    padding: '20px',
                    color: '#green',
                    background: '#fff',
                    showConfirmButton: true,
                })
            }
        }
        if(contador==3){
            if(puntaje>=160){
                contador=0;
                navigate("/nivel_3_partes");
            }
            else{
                Swal.fire({
                    title: 'Necesitas 120 puntos o más para acceder a este planeta.',
                    width: 400,
                    icon: 'warning',
                    padding: '20px',
                    color: '#green',
                    background: '#fff',
                    showConfirmButton: true,
                })
            }
        }

    }

      return (
        
    <motion.div 
        
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={ {x: window.innerWidth, transition: {duration: 1}}}
    
     className="centradomapa">
        <div className='fondo'>
            <div className='nivel1'> </div>
            <div className='nivel2'> </div>
            <div className='nivel3'> </div>
            <div id="v" className={style}></div>
            <a id="btnizq" className="izq" onClick={izquierda} type="button"></a>
            <a id="btnder" className="der" onClick={derecha} type="button"></a>
            <a id="btnsel1" className="sel1" onClick={() => seleccionar()} type="button"></a>
        </div>
    </motion.div> 

      );
    }
  

export default Mapa;