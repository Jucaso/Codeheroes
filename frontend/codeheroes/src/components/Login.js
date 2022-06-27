import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import "./styles/Login.css";
//import Context from './Context';
import Cookies from 'universal-cookie';
import { motion } from 'framer-motion';

function Login() {
    let navigate = useNavigate();
    const cookies = new Cookies();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [mode, setMode] = useState(true);
    //const myContext = useContext(Context);

    useEffect(() => {
        loadUsers(); 
        setUsername("");
        setPassword("");
    }, [mode]);

    const loadUsers = async function() {
        fetch("http://127.0.0.1:8000/users/",{
            method: "GET"
        })
      .then(response => response.json()) 
      .then((data)=>{
        setUsers(data);
        //console.log("Data loaded succesfully:",data);
      }) 
      .catch(error => console.log(error));
    }
    
    function handleSubmit(e){
        e.preventDefault();
        const user = users.find(user => user.username == username && user.password == password);
        
        if(user){
            setUsername("");
            setPassword("");
            cookies.set('idUsuario', user.id, {path: '/'});
            navigate('/inicio');
        }          
    } 
    
    async function handleRegister(e){
        e.preventDefault();
        var idAux = 0;
        try {
            const request = await fetch('http://127.0.0.1:8000/users/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',           
            }, 
            body:JSON.stringify({username: username, password: password})
            }).then(() => {
                //setMode(true);
                //navigate('/')
            })
        } catch (error) {
            console.log(error);
        }
        
        try {
            fetch("http://127.0.0.1:8000/users/",{
            method: "GET"
                })
            .then(response => response.json()) 
            .then((data)=>{
                //console.log(data[data.length - 1]);
                idAux = data[data.length - 1].id;              
                //console.log("Data loaded succesfully:",idAux);
                try {
                    const request = fetch('http://127.0.0.1:8000/usuarios/', {
                    'method':'POST',
                    headers: {
                        'Content-Type':'application/json',           
                    }, 
                    body:JSON.stringify({estrellas: 0,
                                        puntaje: 0,
                                        itemsIds: "6",
                                        itemActivo: "6",
                                        nivel_1: "0,0,0",
                                        nivel_2: "0,0,0",
                                        nivel_3: "0,0,0",
                                        nivel_4: "0,0,0",
                                        user: idAux})
                    }).then(() => {
                        //setMode(true);
                        //navigate('/')
                    })
                } catch (error) {
                    console.log(error);
                } 
            }) 
        } catch (error) {
            console.log(error);
        }      
        
        setMode(true)
        setUsername("");
        setPassword("");
        alert("Usuario registrado con éxito");
    }
    

    if(mode){
        return (
            <motion.div 
        
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={ {x: window.innerWidth, transition: {duration: 1}}} className="Login">
                    <section className="h-300 gradient-form">
                        <div className="container py-3 h-200">
                        <div className="row d-flex justify-content-center h-100">
                            <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body mx-md-4">
                                    <div className="text-center">
                                        <img className='img-fluid' width="150px" height="150px" src="https://media.discordapp.net/attachments/981331949501181962/988536134168641556/verde.png"
                                        alt="logo"/>
                                        <h4 className="mt-1 mb-5 pb-1">Iniciar Sesión</h4>
                                    </div>
                
                                    <form onSubmit={handleSubmit}>         
                                        <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form2Example11">Usuario</label>
                                        <input type="text" id="form2Example11" className="form-control" value={username} onChange={e => setUsername(e.target.value)}/>
                                        </div>
                    
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form2Example22" >Contraseña</label>
                                        <input type="password" id="form2Example22" className="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
                                        </div>
                    
                                        <div className="text-center pt-1 mb-5 pb-1">
                                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2" type="submit">Iniciar sesión</button>
                                        </div>
                    
                                        <div className="d-flex align-items-center justify-content-center pb-4">
                                        <p className="mb-0 me-2">¿No tienes cuenta?</p>
                                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2" type="button" onClick={() => setMode(false)}>Crear cuenta</button>
                                        </div>
                    
                                    </form>
                    
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex fondo2">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4 mb-5 ">
                                    <h4 className="mb-0"> <span className='type clip step'>print("Prepárate para ser el héroe que la galaxia de la programación necesita!")</span></h4>
                                    <p className="small mt-0 mono"> 👋 ¡Bienvenido héroe tripulante! 🦸‍♀️ 👩‍🚀, inicia sesión para comenzar o continuar la aventura 🚀... <br></br> La 🌌 te está esperando!</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                </motion.div>
        )
    }
    else{
        return (
            <div className="Login">
                    <section className="h-300 gradient-form">
                        <div className="container py-3 h-200">
                        <div className="row d-flex justify-content-center h-100">
                            <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body mx-md-4">
                                    <div className="text-center">
                                        <img className='img-fluid' width="150px" height="150px" src="https://media.discordapp.net/attachments/981331949501181962/988536134168641556/verde.png"
                                        alt="logo"/>
                                        <h4 className="mt-1 mb-5 pb-1">Registrate</h4>
                                    </div>
                
                                    <form onSubmit={handleRegister}>         
                                        <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form2Example11">Usuario</label>
                                        <input type="text" id="form2Example11" className="form-control" value={username} onChange={e => setUsername(e.target.value)}/>
                                        </div>
                    
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form2Example22" >Contraseña</label>
                                        <input type="password" id="form2Example22" className="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
                                        </div>
                    
                                        <div className="text-center pt-1 mb-5 pb-1">
                                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2" type="submit">Registrarse</button>
                                        </div>
                    
                                        <div className="d-flex align-items-center justify-content-center pb-4">
                                        <p className="mb-0 me-2">¿Ya tienes una cuenta?</p>
                                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2" type="button" onClick={() => setMode(true)}>Inicia sesión</button>
                                        </div>
                    
                                    </form>
                    
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex fondo2">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4 mb-5 ">
                                    <h4 className="mb-0"> <span className='type clip step'>print("Prepárate para ser el héroe que la galaxia de la programación necesita!")</span></h4>
                                    <p className="small mt-0 mono"> 👋 ¡Bienvenido héroe tripulante! 🦸‍♀️ 👩‍🚀, inicia sesión para comenzar o continuar la aventura 🚀... <br></br> La 🌌 te está esperando!</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                </div>
        )
    }
    
}

export default Login;
