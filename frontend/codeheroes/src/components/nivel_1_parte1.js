import React, { useEffect } from 'react';
import './styles/niveles.css'
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
        <div className='container'>
            <div className="card">
                <div className="card-header">
                    Teoría #1 - Variables y operciones aritméticas
                </div>
                <div className="card-body">
                    <h4 className="card-title">Breve descripción de python</h4>
                    <p className="card-text">Python es un lenguaje de programación de alto nivel, de tipado dinámico, muy famoso hoy en día, este permite
                    trabajar de manera muy comoda para el desarrollador. Es importante destacar que pyton maneja indentaciones para separar los diferentes
                    bloques de codigo, por ejemplo:
                    </p>
                    <img src="https://keepcoding.io/wp-content/uploads/2021/10/sentencia-def-450x150.jpg" className="img-fluid|thumbnail rounded-top" alt=""></img>
                    <p>
                    Es importante tener esto en cuenta para más adelante, pero vamos poco a poco {";)"}
                    </p>
                    <h4 className="card-title">Variables</h4>
                    <p className="card-text">Las variables son aquellos objetos que ocupan un espacio en memoria y permiten almacenar diferentes datos.
                    Estas deben tener un nombre único ya que ocupan un espacio en memoria único.
                    </p>
                    <h4 className="card-title">Alcance</h4>
                    <p className="card-text">Python por defecto cada vez que se crea una variable la define localmente, esto quiere decir que solo es usable 
                    en el bloque de código donde se haya definido. Ahora bien, si se quiere que una variable sea global, se debe definir con la palabra reservada global.
                    </p>    
                    <h4 className="card-title">Asignación de valores</h4>
                    <p className="card-text">La asignación de valores a una variable es una operación que se realiza con el signo igual (=). Python permite asignar valores
                    dinamicamente, sin necesidad de especificarle que tipo de dato será la variable, observemos algunos tipos de datos:
                    <br></br>
                    - Enteros: Son valores numericos enteros, por ejemplo: 1, -5, 2, etc. 
                    <br></br>
                    - Flotantes: Son valores numericos con decimales, por ejemplo: 1.5, -5.5, 2.5, etc.
                    <br></br>
                    - String: Son cadenas de texto, por ejemplo: "Hola", "Adios", "Hola mundo", etc.
                    </p>
                    <h4>Operaciones aritméticas</h4>
                    <p>
                    En python existen operaciones aritméticas, estas se realizan con el signo de suma (+), resta (-), multiplicación (*), división (/) y exponenciación (**).
                    Existen más this especiales como el signo de división entre dos números (//) y el signo de residuo (%). 
                    </p> 
                    <div>
                    <img src="https://miro.medium.com/max/1400/1*JkP_zJukYXOPpXVxk__ecQ.png" width="400px" height="400px" alt="" className="img-fluid|thumbnail rounded-top"></img>
                    </div>
                    
                    <a name="" id="" className="btn btn-primary btnRight" role="button">Terminar</a>
       
                </div>
                <div className="card-footer text-muted">
                    @Copyright CODEHEROES 2022
                </div>
            </div>
        </div>
        

    );
}