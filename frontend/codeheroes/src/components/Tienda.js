import React, {useState} from 'react';
import "./styles/Tienda.css";
import { DragDropContext, Droppable, Draggable}  from 'react-beautiful-dnd';
import {Link} from 'react-router-dom';	
import {Card, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';


function Tienda() {


    const Compra = () => {
        
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


    return (
    <div className="ContenedorJuego">
        <div className="bg_animate2">
            <div className="pertien-container">
                <div className="cardperfil">
                    <div className="headerperfil">
                    <img className="img-fluid img_perfil"  width="150px" height="150px"
                    src="https://media.discordapp.net/attachments/763863487021449226/804350713357926450/jucaso_final.png"/> 
                    </div>
                    <div className="contperfilusu">
                    <img className="img-fluid"  width="30px" height="50px"
                    src="https://cdn.discordapp.com/attachments/981331949501181962/988649441101774859/nombre.png"/>   <h2 className="perfilusu"> Nombre:
                     </h2> <h4 className="perfilusu user"> Pepe </h4>
                    </div>
                    <div className="contperfilusu">
                    <img className="img-fluid"  width="30px" height="50px"
                    src="https://cdn.discordapp.com/attachments/981331949501181962/988638636402679868/estrella.png"/><h2 className="perfilusu"> Estrellas:
                     </h2> <h4 className="perfilusu user"> 4 </h4>
                    
                    </div>
                    <h5 className="tiendasc"> Codeheroe <img className="img-fluid" width="30px" src="https://cdn.discordapp.com/attachments/981331949501181962/988648592598257674/medalla.png"/> </h5> 
                </div>
                <div className="titletienda">
                <h1 className="titulotienda"> TIENDA </h1>
                <div className="tienda_container">
                    <div className="juegoimgcont">
                        
                        <div className="juegoimgcont3">
                            <Card style={{ background: 'transparent', border: 'none' }}>
                                <div className="ticketypro">
                                    <button type='button' className="botoneti " onClick={Compra}>
                                        <img className="img-fluid etiqueta"
                                        src="https://media.discordapp.net/attachments/741712963601432617/988609464355684352/etiqueta1.png"/>
                                    </button>
                                        <Card.Img variant="top" className="venta1" 
                                        src="https://whatsondisneyplus.com/wp-content/uploads/2022/05/vader.png" />
                                </div>
                            </Card>
                            <Card style={{ background: 'transparent', border: 'none' }}>
                                <div className="ticketypro">
                                    <button type='button' className="botoneti " onClick={Compra}>
                                        <img className="img-fluid etiqueta"
                                        src="https://media.discordapp.net/attachments/741712963601432617/988609464355684352/etiqueta1.png"/>
                                    </button>
                                        <Card.Img variant="top" className="venta2" 
                                        src="https://www.disneyplusinformer.com/wp-content/uploads/2022/03/Moon-Knight-Profile-Avatar.png" />
                                </div>
                            </Card>
                            <Card style={{ background: 'transparent', border: 'none' }}>
                                <div className="ticketypro">
                                    <button type='button' className="botoneti " onClick={Compra}>
                                        <img className="img-fluid etiqueta"
                                        src="https://media.discordapp.net/attachments/741712963601432617/988609464355684352/etiqueta1.png"/>
                                    </button>
                                        <Card.Img variant="top" className="venta3" 
                                        src="https://media.discordapp.net/attachments/924106496059539557/988614847535145030/avatar3.png?width=473&height=473" />
                                </div>
                            </Card>
                        </div>
                        <img className="img-fluid tablon" src="https://media.discordapp.net/attachments/981331949501181962/988641705853075476/tablon.png?width=1020&height=174"/>
                    </div>
                    <div className="juegoimgcont">
                        <div className="juegoimgcont3">
                            <Card style={{ background: 'transparent', border: 'none' }}>
                                <div className="ticketypro">
                                    <button type='button' className="botoneti " onClick={Compra}>
                                        <img className="img-fluid etiqueta"
                                        src="https://media.discordapp.net/attachments/741712963601432617/988609464355684352/etiqueta1.png"/>
                                    </button>
                                        <Card.Img variant="top" className="venta4" 
                                        src="https://images-ext-2.discordapp.net/external/bbjEG3HEfVWTXFXNzBl616iEkSVY1dDQNw6kFydZM08/https/assets.reedpopcdn.com/master-chief-removes-helmet-in-halo-tv-series-to-show-his-human-side-says-343-industries-1648650530651.jpg/BROK/thumbnail/1200x900/quality/100/master-chief-removes-helmet-in-halo-tv-series-to-show-his-human-side-says-343-industries-1648650530651.jpg?width=631&height=473" />
                                </div>
                            </Card>
                            <Card style={{ background: 'transparent', border: 'none' }}>
                                <div className="ticketypro">
                                    <button type='button' className="botoneti" onClick={Compra}>
                                        <img className="img-fluid etiqueta"
                                        src="https://media.discordapp.net/attachments/741712963601432617/988609464355684352/etiqueta1.png"/>
                                    </button>
                                        <Card.Img variant="top" className="venta5"
                                        src="https://www.nacionflix.com/__export/1608862619334/sites/debate/img/2020/12/24/la-razxn-por-la-que-gal-gadot-es-tan-importante-para-mujer-maravilla.jpg_2062789929.jpg" />
                                </div>
                            </Card>
                            <Card style={{ background: 'transparent', border: 'none' }}>
                                <div className="ticketypro">
                                    <button type='button' className="botoneti" onClick={Compra}>
                                        <img className="img-fluid etiqueta" width="200px"
                                        src="https://media.discordapp.net/attachments/741712963601432617/988609464355684352/etiqueta1.png"/>
                                    </button>
                                        <Card.Img variant="top" className="venta6" 
                                        src="https://images-ext-2.discordapp.net/external/P0jnDvbql44x53NBa72fkkzxgGWVUaNW9oLCM1ebVbY/https/supercpps.com/assets/images/avatars/super-club-penguin-avatar.jpg" />
                                </div>
                            </Card>
                        </div>
                            <img className="img-fluid tablon" src="https://media.discordapp.net/attachments/981331949501181962/988641705853075476/tablon.png?width=1020&height=174"/>
                    </div>
                </div>
                </div>
            </div>
                    <div className="burbujas">
                        <div className="burbuja"></div>
                        <div className="burbuja"></div>
                        <div className="burbuja"></div>
                        <div className="burbuja"></div>
                        <div className="burbuja"></div>
                        <div className="burbuja"></div>
                        <div className="burbuja"></div>
                    </div>
        </div>
    </div>
        );
}

export default Tienda;







