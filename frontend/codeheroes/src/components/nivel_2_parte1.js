import React, { useEffect } from 'react';
import './styles/niveles.css'
export default function Nivel_2_parte1() {
    
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
        <div className='container'>
            <div className="card">
                <div className="card-header">
                    Teoría #2 - Condicionales
                </div>
                <div className="card-body">
                    <h4 className="card-title">¿Qué son los condicionales?</h4>
                    <p className="card-text">Los condicionales son aquellos que le permiten al programa tomar una decisión con respecto al funcionamiento. La manera de cómo
                    python toma estas decisiones es mediante una serie de operadores que se encuentran en la siguiente tabla:</p>
                    <img src='https://www.maquinasvirtuales.eu/ipsoapoo/2020/12/python-aprendiendo-desde-cero-vi-operadores-3.png'></img>
                    <p>
                    Podemos observar en la tabla los operadores que se usan en python y sus funciones, pero no en donde se aplican, para poder tomar una decisión se necesitan de las conocidas <b>sentencias condicionales</b>, observemos un ejemplo:
                    </p>
                    <img src="https://interactivechaos.com/sites/default/files/inline-images/tutorial_python_control_03.JPG"></img>
                    <p>
                    En este ejemplo, el programa nos dice que si el valor de la variable <b>n</b> es mayor o menor a <b>0</b> entonces el programa imprime <b>Número positivo</b>, o <b>Número negativo</b> si es menor.
                    Pero se observa una sentencia <b>else</b>, que es la que se retornará en caso de que no se cumpla ningun caso anterior, en este caso el programa retornará <b>0</b> si no se cumplen
                    las sentencias anteriores.
                    </p>

                   <p>Se concluye la importancia de los condicionales, pues las decisiones son fundamentales en todo ámbito, incluyendo la computación. Los condicionales son
                    poderosas herramientas que nos permiten realizar acciones que establezcamos y así poder crear un programa lógico y funcional.
                   </p>
                    
                    <a name="" id="" className="btn btn-primary btnRight" role="button">Terminar</a>
       
                </div>
                <div className="card-footer text-muted">
                    @Copyright CODEHEROES 2022
                </div>
            </div>
        </div>
        

    );
}