import React, { useState } from "react";
import "./styles/mapa.css";
import Nav from "./navbar.js";
import { motion } from 'framer-motion';
var contador=0;
var iniciar=0;
var link="";
const v=document.getElementById("v");
const Mapa = () => {
    
    const [style, setStyle] = useState("cont");
     
    const derecha = () => {
        console.log(contador);
        if(contador==0){
            setStyle("volar");
            contador=1;
            link="";
        }
        else if(contador==1){
            setStyle("volar1");
            contador=2;
            link="nivel_1_partes";
        }else if(contador==2){
            setStyle("volar2");
            contador=3;
            link="nivel_2_partes";
        }else if(contador==3){
            setStyle("volar3");
            link="nivel_3_partes";
        }
      
        
    };
    const izquierda = () => {
        console.log(contador);
        if(contador==0){
            setStyle("volar");
            contador=0;
            link="";
        }
        else if(contador==1){
            setStyle("volar");
            contador=0;
            link="";
            
        }else if(contador==2){
            setStyle("volar1");
            contador=1;
            link="nivel_1_partes";
        }else if(contador==3){
            setStyle("volar2");
            contador=2;
            link="nivel_2_partes";
        }
      
        
    };

    const seleccionar = () => {
        if(contador==1){
            return("google.com")
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
            <a id="btnsel1" className="sel1" href={link}  type="button"></a>
        </div>
    </motion.div> 

      );
    }
  

export default Mapa;