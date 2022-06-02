import React, { useState } from "react";
import "./styles/mapa.css";

var contador=0;
var iniciar=0;
var link="";
const v=document.getElementById("v");
const Mapa = () => {
    
    const [style, setStyle] = useState("cont");
     
    const derecha = () => {
        
        if(contador==0){
            setStyle("volar");
            contador=1;
            link="";
        }
        else if(contador==1){
            setStyle("volar1");
            contador=2;
            link="nivel_1_parte1";
        }else if(contador==2){
            setStyle("volar2");
            contador=3;
            link="nivel2";
        }else if(contador==3){
            setStyle("volar3");
            link="nivel3";
        }
      
        
    };
    const izquierda = () => {
        
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
            link="nivel1";
        }else if(contador==3){
            setStyle("volar2");
            contador=2;
            link="nivel2";
        }
      
        
    };

    const seleccionar = () => {
        if(contador==1){
            return("google.com")
        }

    }

      return (
        <body className="">
        <div className='fondo'>
            

            <div className='nivel1'> </div>
            <div className='nivel2'> </div>
            <div className='nivel3'> </div>

            <div id="v" className={style}></div>
            

            <a id="btnizq" className="izq" onClick={izquierda} type="button"></a>
            <a id="btnder" className="der" onClick={derecha} type="button"></a>
            <a id="btnsel1" className="sel1" href={link}  type="button"></a>
        </div>


    </body> 
      );
    }
  

export default Mapa;