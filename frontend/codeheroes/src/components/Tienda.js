import React, {useState, useEffect} from 'react';
import "./styles/Tienda.css";
import { DragDropContext, Droppable, Draggable}  from 'react-beautiful-dnd';
import {Link} from 'react-router-dom';	
import {Card, Button, Modal, Spinner, FloatingLabel, Form} from 'react-bootstrap';
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';
import { motion } from 'framer-motion';
import Nav from "./navbar.js";

function Tienda() {
    var items = [
        {id: 0, fuente: "https://whatsondisneyplus.com/wp-content/uploads/2022/05/vader.png", color: "3px solid rgb(219, 55, 55)", precio: 6},
        {id: 1, fuente: "https://www.disneyplusinformer.com/wp-content/uploads/2022/03/Moon-Knight-Profile-Avatar.png", color: "3px solid rgb(99, 98, 98)", precio: 6},
        {id: 2, fuente: "https://media.discordapp.net/attachments/924106496059539557/988614847535145030/avatar3.png?width=473&height=473", color: "3px solid rgb(233, 229, 29)", precio: 6 },
        {id: 3, fuente: "https://images-ext-2.discordapp.net/external/bbjEG3HEfVWTXFXNzBl616iEkSVY1dDQNw6kFydZM08/https/assets.reedpopcdn.com/master-chief-removes-helmet-in-halo-tv-series-to-show-his-human-side-says-343-industries-1648650530651.jpg/BROK/thumbnail/1200x900/quality/100/master-chief-removes-helmet-in-halo-tv-series-to-show-his-human-side-says-343-industries-1648650530651.jpg?width=631&height=473", color: "3px solid rgb(43, 73, 24)", precio: 3},
        {id: 4, fuente: "https://www.nacionflix.com/__export/1608862619334/sites/debate/img/2020/12/24/la-razxn-por-la-que-gal-gadot-es-tan-importante-para-mujer-maravilla.jpg_2062789929.jpg", color: "3px solid rgb(233, 162, 29)", precio: 3},
        {id: 5, fuente: "https://images-ext-2.discordapp.net/external/P0jnDvbql44x53NBa72fkkzxgGWVUaNW9oLCM1ebVbY/https/supercpps.com/assets/images/avatars/super-club-penguin-avatar.jpg", color: "3px solid rgb(29, 77, 233)", precio: 3},
        {id: 6, fuente: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", color: "3px solid white", precio: 3, estado: 0},
    ]

    var etiquetas = [
        {fuenteSinComprar6: "https://discord.com/channels/736265463960567808/981331949501181962/991146568939999242" , fuenteSinComprar3: "https://discord.com/channels/736265463960567808/981331949501181962/991146568939999242"},
        {fuenteComprado: "https://discord.com/channels/736265463960567808/981331949501181962/991144416909742080"}
    ]

    const cookies = new Cookies();
    const [username, setUsername] = useState([]);
    const [estrellas, setEstrellas] = useState(0);
    const [itemsJugador, setItemsJugador] = useState([]);
    const [itemActivo, setItemActivo] = useState(0);
    const [loading, setLoading] = useState(true);
    const [etiquetasItems, setEtiquetasItems] = useState([]);
    const [codigo, setCodigo]  = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getData();
    }, []);



    function setItemsOnVector(items){
        let itemsVector = [];
        for(let i = 0; i < items.length; i++){
            if(items[i] != ',')
            itemsVector.push(parseInt(items[i]));
        }
        
        //console.log("itemsVector: " + itemsVector);
        setItemsJugador(itemsVector);  
        // itemsVector.sort(function(a, b) {
        //     return a - b;
        //   });

        let etiquetasVector = [];
        for(let i=0; i<6; i++){
            console.log(itemsVector+" includes " + i + ": " + itemsVector.includes(i));
            if(itemsVector.includes(i)){
                etiquetasVector.push("https://media.discordapp.net/attachments/981331949501181962/991144416666468463/comprado.png");          
            }
            else{
                if(i < 3){
                    etiquetasVector.push("https://media.discordapp.net/attachments/981331949501181962/991146568541536256/compra6.png");
                }
                else{
                    etiquetasVector.push("https://media.discordapp.net/attachments/981331949501181962/991146568776425503/compra3.png");
                }
            }
        }
        //console.log("etiquetasVector: " + etiquetasVector);
        setEtiquetasItems(etiquetasVector);        

    }

    function equipar(item){
        try {
            fetch("http://127.0.0.1:8000/usuarios/"+cookies.get('idUsuarioStats')+"/", {
            'method':'PUT',
            headers: {
                'Content-Type':'application/json',           
            }, 
            body:JSON.stringify({itemActivo: item,
                                user: cookies.get('idUsuario')
                                })
            }).then(() => {
                //setMode(true);
                getData();
                //navigate('/nivel_1_parte2');
            })
        } catch (error) {
            console.log(error);
        }
    }

    async function getData(){
        try {
            const request = await fetch("http://127.0.0.1:8000/users/"+cookies.get('idUsuario')+"/");
            const data = await request.json();
            console.log("Username:",data.username);
            setUsername(data.username);
            
        } catch (error) {
            console.log(error);
        }

        try {
            const request = await fetch("http://127.0.0.1:8000/usuarios/"+cookies.get('idUsuarioStats')+"/");
            const data = await request.json();
            console.log("Estrellas:",data.estrellas);
            setEstrellas(data.estrellas);
            setItemActivo(data.itemActivo);
            setItemsOnVector(data.itemsIds);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    function verificaTiene(item){
        for(let i=0;i<itemsJugador.length;i++){
            if(itemsJugador[i]==item){
                return true;
            }
        }
        return false;
    }


    const Canjear = () => {

        console.log(codigo);
        Swal.fire({
                title: 'Canjeao mano',
                width: 400,
                icon: 'success',
                padding: '20px',
                color: '#green',
                background: '#fff',
                showConfirmButton: true,
        })
    }

    const Compra = (id) => {
        
        if(verificaTiene(id)){
            Swal.fire({
                title: 'Ya tienes este artículo',
                width: 400,
                icon: 'warning',
                padding: '20px',
                color: '#black',
                background: '#fff',
                showConfirmButton: true,
            })
        }
        else{

        
        if(items[id].precio <= estrellas){
            //setItemActivo(id)
            console.log(id)
                var newItemsJugador = itemsJugador + "," + id;
            var estrellasNuevas = estrellas - items[id].precio;
            try {
                fetch("http://127.0.0.1:8000/usuarios/"+cookies.get('idUsuarioStats')+"/", {
                'method':'PUT',
                headers: {
                    'Content-Type':'application/json',           
                }, 
                body:JSON.stringify({estrellas: estrellasNuevas,
                                    itemsIds: newItemsJugador,
                                    user: cookies.get('idUsuario')
                                    })
                }).then(() => {
                    getData()
                    //setMode(true);
                    //navigate('/nivel_1_parte2');
                })
            } catch (error) {
                console.log(error);
            }
            getData();
            Swal.fire({
                title: '¡ Compra exitosa !',
                width: 400,
                icon: 'success',
                padding: '20px',
                color: '#black',
                background: '#fff',
                showConfirmButton: true,
            })
           
        }  
        else{
            Swal.fire({
                title: 'Ups, no tienes suficientes estrellas para adquirir este artículo.',
                width: 400,
                icon: 'warning',
                padding: '20px',
                color: '#black',
                background: '#fff',
                showConfirmButton: true,
            })
        } 
    }          
    }


    return (
        <motion.div
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={ {x: window.innerWidth, transition: {duration: 1}}}
        >
            {loading ? (<div className="d-flex justify-content-center">
        <Spinner animation="border" />
       </div>)
       :
       (
    <>
        <Nav/>
    <div className="ContenedorJuego">  
        <div className="">
            <div className="pertien-container">
                <div className="cardperfil">
                    <div className="headerperfil">
                        <img className="img-fluid img_perfil" style={{ border: items[itemActivo].color}}  width="150px" height="150px"
                        src={items[itemActivo].fuente}/> 
                    </div>
                    <div className="contperfilusu">
                        <img className="img-fluid"  width="30px" height="50px"
                        src="https://cdn.discordapp.com/attachments/981331949501181962/988649441101774859/nombre.png"/>   <h5 className="perfilusu"> Nombre:
                        </h5> <h5 className="perfilusu user"> {username} </h5>
                    </div>
                    <div className="contperfilusu">
                        <img className="img-fluid"  width="30px" height="50px"
                        src="https://cdn.discordapp.com/attachments/981331949501181962/988638636402679868/estrella.png"/><h5 className="perfilusu"> Estrellas:
                        </h5> <h5 className="perfilusu user"> {estrellas} </h5>
                    </div>
                        <h5 className="tiendasc"> Codeheroe <img className="img-fluid" width="30px" src="https://cdn.discordapp.com/attachments/981331949501181962/988648592598257674/medalla.png"/> </h5>           
                    <div className="editarPerfil">
                        <button className="editarPerfilBtn" onClick={handleShow}>Editar</button>
                    </div>      
                </div>
                <div className="titletienda">
                    <div className="headertienda">
                        <h1 className="titulotienda"> TIENDA  </h1>
                        <div className="codigotienda">
                            <h5 className="ingresacodigo"> Ingresa tu código </h5>
                            <form>
                                <input className='codigoticket' value={codigo} onChange={text => setCodigo(text.target.value)} type="text" name="name" />
                            </form>
                            <button className="btn btn-primary botonagrio" onClick={() => Canjear()}> Canjear </button>
                        </div> 
                    </div>
                    <div className="tienda_container">
                        <div className="juegoimgcont">       
                            <div className="juegoimgcont3">
                                <Card style={{ background: 'transparent', border: 'none' }}>
                                    <div className="ticketypro">
                                        <button type='button' className="botoneti " onClick={() => Compra(0)}>
                                            <img className="img-fluid etiqueta"
                                            src={etiquetasItems[0]}/>
                                        </button>
                                            <Card.Img variant="top" className="venta1" 
                                            src={items[0].fuente}/>
                                    </div>
                                </Card>
                                <Card style={{ background: 'transparent', border: 'none' }}>
                                    <div className="ticketypro">
                                        <button type='button' className="botoneti " onClick={() => Compra(1)}>
                                            <img className="img-fluid etiqueta"
                                            src={etiquetasItems[1]}/>
                                        </button>
                                            <Card.Img variant="top" className="venta2" 
                                            src={items[1].fuente} />
                                    </div>
                                </Card>
                                <Card style={{ background: 'transparent', border: 'none' }}>
                                    <div className="ticketypro">
                                        <button type='button' className="botoneti " onClick={() => Compra(2)}>
                                            <img className="img-fluid etiqueta"
                                            src={etiquetasItems[2]}/>
                                        </button>
                                            <Card.Img variant="top" className="venta3" 
                                            src={items[2].fuente} />
                                    </div>
                                </Card>
                            </div>
                            <img className="img-fluid tablon" src="https://media.discordapp.net/attachments/981331949501181962/988641705853075476/tablon.png?width=1020&height=174"/>
                        </div>
                        <div className="juegoimgcont">
                            <div className="juegoimgcont3">
                                <Card style={{ background: 'transparent', border: 'none' }}>
                                    <div className="ticketypro">
                                        <button type='button' className="botoneti " onClick={() => Compra(3)}>
                                            <img className="img-fluid etiqueta"
                                            src={etiquetasItems[3]}/>
                                        </button>
                                            <Card.Img variant="top" className="venta4" 
                                            src={items[3].fuente} />
                                    </div>
                                </Card>
                                <Card style={{ background: 'transparent', border: 'none' }}>
                                    <div className="ticketypro">
                                        <button type='button' className="botoneti" onClick={() => Compra(4)}>
                                            <img className="img-fluid etiqueta"
                                            src={etiquetasItems[4]}/>
                                        </button>
                                            <Card.Img variant="top" className="venta5"
                                            src={items[4].fuente} />
                                    </div>
                                </Card>
                                <Card style={{ background: 'transparent', border: 'none' }}>
                                    <div className="ticketypro">
                                        <button type='button' className="botoneti" onClick={() => Compra(5)}>
                                            <img className="img-fluid etiqueta" width="200px"
                                            src={etiquetasItems[5]}/>
                                        </button>
                                            <Card.Img variant="top" className="venta6" 
                                            src={items[5].fuente} />
                                    </div>
                                </Card>
                            </div>
                            <img className="img-fluid tablon" src="https://media.discordapp.net/attachments/981331949501181962/988641705853075476/tablon.png?width=1020&height=174"/>
                        </div>
                    </div>
                </div>
            </div>
                    <div className="burbujas">
                        <div className="burbuja2"></div>
                        <div className="burbuja2"></div>
                        <div className="burbuja2"></div>
                        <div className="burbuja2"></div>
                        <div className="burbuja2"></div>
                        <div className="burbuja2"></div>
                        <div className="burbuja2"></div>
                    </div>
       </div>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="modalSides">
                <Modal.Title>Editar perfil</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalEditarContainer">
           
            {itemsJugador.map(item => (
                <Card style={{ background: 'transparent', border: 'none' }}>             
                    <Card.Img variant="top" className="venta5" style={{ border: items[item].color}}
                    src={items[item].fuente} />
                    <button type='button' className="editarPerfilBtn" onClick={() => equipar(item)}>
                        Equipar 
                    </button>      
                </Card>
            ))}
            </Modal.Body>
            <Modal.Footer className="modalSides editarPerfil">
                <Button variant="secondary" className="editarPerfilBtn" onClick={handleClose}>
                Cerrar
                </Button>

            </Modal.Footer>
            </Modal>
    </div>
    </>)
   }
        </motion.div>
    
        );
}

export default Tienda;







