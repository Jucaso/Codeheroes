import React from 'react';
import "./styles/Login.css";

function Login() {
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
                                <h4 className="mt-1 mb-5 pb-1">Iniciar Sesión</h4>
                            </div>
            
                            <form>         
                                <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form2Example11">Usuario</label>
                                <input type="email" id="form2Example11" className="form-control"/>
                                </div>
            
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form2Example22">Contraseña</label>
                                <input type="password" id="form2Example22" className="form-control"/>
                                </div>
            
                                <div className="text-center pt-1 mb-5 pb-1">
                                <a className="btn btn-primary btn-block fa-lg gradient-custom-2" type="button" href="inicio">Log
                                    in</a>
                                <a className="text-muted" href="#!">¿Olvidaste la contraseña?</a>
                                </div>
            
                                <div className="d-flex align-items-center justify-content-center pb-4">
                                <p className="mb-0 me-2">¿No tienes cuenta?</p>
                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2" type="button">Crear cuenta</button>
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

export default Login;
