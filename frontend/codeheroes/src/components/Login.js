import React from 'react';
import "./styles/Login.css";



function Login() {


  return (
    <div className="Login">
        <div className="texto">
            <section className="h-300 gradient-form">
                <div className="container py-5 h-200">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                    <div className="card rounded-3 text-black">
                        <div className="row g-0">
                        <div className="col-lg-6">
                            <div className="card-body p-md-5 mx-md-4">
            
                            <div className="text-center">
                                <img src="https://media.discordapp.net/attachments/924106496059539557/981331949320798304/lg1.png"
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
                                <a className="btn btn-primary btn-block fa-lg gradient-custom-2" type="button" href="home.html">Log
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
                        <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 className="mb-4">Prepárate para ser el heroe que el mundo de la programación necesita!</h4>
                            <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Login;
