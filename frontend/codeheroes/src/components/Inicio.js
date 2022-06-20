import React from 'react';
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './styles/Inicio.css';
import Nav from "./navbar.js";
import Cookies from 'universal-cookie';
//import Context from './Context';

export default function Inicio() {
    const cookies = new Cookies();
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
        }
    }
        //const user = userStats.find(user => user.id == cookies.get('idUsuario'));
        //return user;
        //console.log("User stats:", userStats);
        //console.log("User", user);

    }
    
    return (
        <div>
        <Nav/>
    <div className='container mt-5'>
        
        <div className='row ms-4'>
            <div className='col-sm'>
            <Card className='cardHeight' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://media.discordapp.net/attachments/981331949501181962/981374664809017434/avatar.jpg" />
                <Card.Body>
                    <Card.Title>Usuario: {user.username}</Card.Title>
                
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Estrellas: {userStats.estrellas}</ListGroupItem>
                    <ListGroupItem>Puntos conseguidos: {userStats.puntaje}</ListGroupItem>
                </ListGroup>

                </Card.Body>
            </Card>
            </div>
            <div className='col-sm'>
            <Card className='cardHeight' style={{ width: '18rem' }}>
                <Card.Img className="imagen" variant="top" src="https://img.freepik.com/foto-gratis/nombre-lenguaje-python-parentesis-programa-sobre-fondo-morado-3d_327483-704.jpg" />
                <Card.Body>
                <Card.Title>Campaña</Card.Title>
                <Card.Text>
                    Prepárate para iniciar la campaña con la cual aprenderas mientras te diviertes!
                </Card.Text>
                <Link to={"/mapa"} className="btn btn-primary">Iniciar</Link>
                </Card.Body>
            </Card>
            </div>
            <div className='col-sm'>
            <Card className='cardHeight' style={{ width: '18rem' }}>
                <Card.Img className="imagen" variant="top" src="https://global-uploads.webflow.com/5f5cc8ba1cb029d559cdb37a/6112642b7e7382090eef0b66_seller-icon-purple.svg" />
                <Card.Body>
                <Card.Title>Tienda</Card.Title>
                <Card.Text>
                    Canjea tus estrellas por tus avatars favoritos!
                </Card.Text>
                <Button className='mt-4' variant="primary">Ingresar</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    </div>
    </div>
    );
}
