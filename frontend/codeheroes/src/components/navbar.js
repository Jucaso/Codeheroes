import React from 'react';
import "../index.css";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

function Nav() {
    const cookies = new Cookies();
    let navigate = useNavigate();

    const logOut = function (){
        cookies.remove('idUsuario');
        cookies.remove('idUsuarioStats');
        navigate("/login");
    }
    return (
        <nav className="navbar navbar-expand navbar-dark navbar-custom">
            <a className="navbar-brand" href="/inicio">
            <img src="https://media.discordapp.net/attachments/924106496059539557/981338764217581578/lgb.png" width="60" height="30"></img>
            </a>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="nav navbar-nav mx-auto" >
                        <li className="nav-item active">
                            <a className="nav-link text-white" href="/inicio">Inicio <span className="visually-hidden">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link text-white" href="/tienda">Tienda<span className="visually-hidden">(current)</span></a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item active">
                            <button name="" id="" className="btn btncito--3 buttonback" onClick={() => logOut()} role="button">Cerrar sesión</button>
                        </li>
                    </ul>
                </div>
        </nav>
    );
}
export default Nav;