import React, {useState} from 'react';
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './styles/Inicio.css';
import Nav from "./navbar.js";
import Cookies from 'universal-cookie';
//import Context from './Context';

export default function Inicio() {

    const items = [
        {id: 0, fuente: "https://whatsondisneyplus.com/wp-content/uploads/2022/05/vader.png", color: "3px solid rgb(219, 55, 55)", precio: 2, colorcard: "10px 10px 42px 0px rgba(255, 0, 0, 0.75)"},
        {id: 1, fuente: "https://www.disneyplusinformer.com/wp-content/uploads/2022/03/Moon-Knight-Profile-Avatar.png", color: "3px solid rgb(99, 98, 98)", precio: 2, colorcard: "10px 10px 42px 0px rgba(98, 98, 98, 0.75)"},
        {id: 2, fuente: "https://media.discordapp.net/attachments/924106496059539557/988614847535145030/avatar3.png?width=473&height=473", color: "3px solid rgb(233, 229, 29)", precio: 2, colorcard: "10px 10px 42px 0px rgba(233, 229, 29, 0.75)"},
        {id: 3, fuente: "https://images-ext-2.discordapp.net/external/bbjEG3HEfVWTXFXNzBl616iEkSVY1dDQNw6kFydZM08/https/assets.reedpopcdn.com/master-chief-removes-helmet-in-halo-tv-series-to-show-his-human-side-says-343-industries-1648650530651.jpg/BROK/thumbnail/1200x900/quality/100/master-chief-removes-helmet-in-halo-tv-series-to-show-his-human-side-says-343-industries-1648650530651.jpg?width=631&height=473", color: "3px solid rgb(43, 73, 24)", precio: 1, colorcard: "10px 10px 42px 0px rgba(43, 73, 24, 0.75)"},
        {id: 4, fuente: "https://www.nacionflix.com/__export/1608862619334/sites/debate/img/2020/12/24/la-razxn-por-la-que-gal-gadot-es-tan-importante-para-mujer-maravilla.jpg_2062789929.jpg", color: "3px solid rgb(233, 162, 29)", precio: 1, colorcard: "10px 10px 42px 0px rgba(233, 162, 29, 0.75)"},
        {id: 5, fuente: "https://images-ext-2.discordapp.net/external/P0jnDvbql44x53NBa72fkkzxgGWVUaNW9oLCM1ebVbY/https/supercpps.com/assets/images/avatars/super-club-penguin-avatar.jpg", color: "3px solid rgb(29, 77, 233)", precio: 1, colorcard: "10px 10px 42px 0px rgba(29, 77, 233, 0.75)"},
        {id: 6, fuente: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", color: "3px solid white", precio: 0, colorcard: "10px 10px 42px 0px gba(255, 255, 255, 0.75)"},
    ]


    const cookies = new Cookies();
    const [username, setUsername] = useState([]);
    const [estrellas, setEstrellas] = useState(0);
    const [itemsJugador, setItemsJugador] = useState();
    const [itemActivo, setItemActivo] = useState(0);

    //const [users, setUsers] = React.useState([]);
    const [userStats, setUserStats] = React.useState([]);
    const [user, setUser] = React.useState([]);
    //const myContext = React.useContext(Context);
    //console.log("Id en inicio:", cookies.get('idUsuario'));

    React.useEffect(() => {
        loadUser(); 
        loadUserStats();
    }, []);

    const loadUser = async function() {
        fetch("http://127.0.0.1:8000/users/"+cookies.get('idUsuario')+"/",{
            method: "GET"
        })
      .then(response => response.json()) 
      .then((data)=>{
        setUser(data);
        //console.log("Users Data loaded succesfully:",data);
      }) 
      .catch(error => console.log(error));
    }
    
    const loadUserStats = async function() {
    fetch("http://127.0.0.1:8000/usuarios/",{
        method: "GET"
    })
    .then(response => response.json()) 
    .then((data)=>{
    setUserStats(data);
    findUser(data);
    //console.log("Users stats data loaded succesfully:",data);
    }) 
    .catch(error => console.log(error));
    }

    const findUser = function(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].user == cookies.get('idUsuario')) {
            //console.log("User:", data[i]);
            setUserStats(data[i]);
            cookies.set('idUsuarioStats', data[i].id, {path: '/'});
        }
    }
        //const user = userStats.find(user => user.id == cookies.get('idUsuario'));
        //return user;
        //console.log("User stats:", userStats);
        //console.log("User", user);

    }
    
    return (
    <div className='fondoiniciojaja'>
        <Nav/>
        <div className="contenidoInicio">
        <div className="IzquierdaAbajo">
            <div className="cardperfilinicio" style={{ boxShadow: items[itemActivo].colorcard}}>
                <div className="headerperfil">
                    <img className="img-fluid img_perfilinicio" style={{ border: items[itemActivo].color}}  width="100px"
                    src={items[itemActivo].fuente}/> 
                </div>
                <div className="contenidocardinicio">
                <div className="UsuarioInicio">
                    <img className="img-fluid"  width="30px" height="50px"
                    src="https://cdn.discordapp.com/attachments/981331949501181962/988649441101774859/nombre.png"/>   <h5 className="TextoInicio"> Nombre:
                    </h5> <h5 className="TextoInicio"> {user.username} </h5>
                </div>
                <div className="UsuarioInicio">
                    <img className="img-fluid"  width="30px" height="50px"
                    src="https://cdn.discordapp.com/attachments/981331949501181962/989709486019207219/PUNTOS.png"/><h5 className="TextoInicio"> Puntos:
                    </h5> <h5 className="TextoInicio"> {userStats.puntaje} </h5>
                </div>
                <div className="UsuarioInicio">
                    <img className="img-fluid"  width="30px" height="50px"
                    src="https://cdn.discordapp.com/attachments/981331949501181962/988638636402679868/estrella.png"/><h5 className="TextoInicio"> Estrellas:
                    </h5> <h5 className="TextoInicio"> {userStats.estrellas} </h5>
                </div>
            </div>
        </div>
            <div className="imageninicio">
            <img className="img-fluid"  width="250px" 
                    src="https://cdn.discordapp.com/attachments/981331949501181962/989711499192832071/0ec989dde8b5fc0deef4e5b09292b6-unscreen.gif"/>
            </div>
            
        </div>

        <div className="DerechaInicio">
            <div className="CampañaInicio">
                <div className="MapaInicio">
                <Card className="TituloMapaInicio" style={{ width: '15rem', height: '27rem' }}>
                <img className='ImagenMapaInicio' width='150px' src="https://cdn-icons.flaticon.com/png/512/3946/premium/3946036.png?token=exp=1656037499~hmac=484e43fecc79fab7135a8d47e53a2cb1" />
                <Card.Body className="bodycardinicio">
                    <Card.Title className='Titulo'>CAMPAÑA</Card.Title>
                    <Card.Text className="Descripcion">
                    Prepárate para iniciar la campaña con la cual aprenderás mientras te diviertes!
                    </Card.Text>

                </Card.Body>
                <Link to="/mapa" className="btn button5 type1">
                            ¡VAMOS!
                </Link>
                </Card>  
                </div>
            </div>
            <div className="MapaInicio">
            <Card className="TituloMapaInicio" style={{ width: '15rem', height: '27rem' }}>
            <img className='ImagenMapaInicio' width='150px' src="https://cdn-icons.flaticon.com/png/512/3946/premium/3946036.png?token=exp=1656037499~hmac=484e43fecc79fab7135a8d47e53a2cb1" />
                <Card.Body className="bodycardinicio">
                    <Card.Title className='Titulo'>TIENDA</Card.Title>
                    <Card.Text className="Descripcion">
                    Canjea tus estrellas por tus avatars favoritos!
                    </Card.Text>
                    
                </Card.Body>
                <Link to="/tienda" className="btn button5 type1">
                    ¡VAMOS!
                    </Link>
                </Card> 
                </div>
            </div>

        </div>
            
    
    </div>
    );
}
