import React from 'react';
import "../index.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark navbar-custom">
            <a className="navbar-brand" href="#">
            <img src="https://media.discordapp.net/attachments/924106496059539557/981338764217581578/lgb.png" width="60" height="30"></img>
            </a>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="nav navbar-nav mx-auto" >
                        <li className="nav-item active">
                            <a className="nav-link text-white" href="#">Inicio <span className="visually-hidden">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link text-white" href="#">Tienda<span className="visually-hidden">(current)</span></a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item active">
                            <a name="" id="" className="btn btn-light" href="#" role="button">Cerrar sesión</a>
                        </li>
                    </ul>
                </div>
        </nav>
    );
}
export default Nav;