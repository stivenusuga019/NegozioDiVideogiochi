import Swal from 'sweetalert2' //sweetalert -> en el navegador
import './Administrador.css';
import { useState } from 'react';
import { registrarProductoEnBd } from '../services/agregarProducto';

export function Administrador() {

    const[nombre, setNombre]=useState("");
    const[foto, setFoto]=useState("");
    const[cantidad, setCantidad]=useState("");
    const[marca, setMarca]=useState("");
    const[descripcion, setDescripcion]=useState("");
    const[precioUnitario, setPrecioUnitario]=useState("");
    const[clasificacion, setClasificacion]=useState("");
    const[proveedor, setProveedor]=useState("");
    const[presentacion, setPresentacion]=useState("");
    const[peso, setPeso]=useState("");
    const[volumen, setVolumen]=useState("");
    const[fechaIngreso, setFechaIngreso]=useState("");
    const[garantia, setGarantia]=useState("");
    const[aplicaDescuento, setAplicaDescuento]=useState("");

    function procesarFormuario(evento){

        evento.preventDefault();
        let datosProducto = {
            "nombre":nombre,
            "cantidad":cantidad,
            "foto":foto,
            "marca":marca,
            "descripcion":descripcion,
            "precioUnitario":precioUnitario,
            "clasificacion":clasificacion,
            "proveedor":proveedor,
            "presentacion":presentacion,
            "peso":peso,
            "volumen":volumen,
            "fechaIngreso":fechaIngreso,
            "garantia":garantia,
            "aplicaDescuento":aplicaDescuento
        };
        console.log(datosProducto);
        registrarProductoEnBd(datosProducto)
        .then((respuesta)=>{
            Swal.fire(
                'Registro Exitoso',
                'Good job',
                'success'
            )
        })
        .catch((error)=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No pudimos registrar el producto!'
            })
        })



    }





    return (

        <>

            <br />
            <br />
            <div class="container-fluid my-5">
                <div class="row">
                    <div class="col-6">
                        <img src="https://firebasestorage.googleapis.com/v0/b/negoziodivideogiochi-c4dbe.appspot.com/o/istockphoto-1313854295-612x612.jpg?alt=media&token=1b8f62a7-909b-44bb-90e7-2e23f973b638" alt="foto" class="img-fluid" />
                    </div>
                    <div class="col-4 card">
                        <h2 class="text-light text-center">Registro de mercancia</h2>
                        <form onSubmit={procesarFormuario}>
                            
                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-shop"></i>
                                        </span>
                                        <input 
                                            id="nombre" 
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Nombre"
                                            onChange={(evento)=>{
                                                setNombre(evento.target.value);
                                            }}  
                                        />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-images"></i>
                                        </span>
                                        <input
                                            id="foto" 
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Foto" 
                                            onChange={(evento)=>{
                                                setFoto(evento.target.value);
                                            }} 
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-archive-fill"></i>
                                        </span>
                                        <input 
                                            id="cantidad" 
                                            type="number" 
                                            class="form-control" 
                                            placeholder="Cantidad"
                                            onChange={(evento)=>{
                                                setCantidad(evento.target.value);
                                            }}  
                                        />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-unity"></i>
                                        </span>
                                        <input 
                                            id="marca" 
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Marca"
                                            onChange={(evento)=>{
                                                setMarca(evento.target.value);
                                            }} 
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="form-floating">
                                <textarea 
                                    id="descripcion" 
                                    class="form-control" 
                                    placeholder="Leave a comment here"
                                    onChange={(evento)=>{
                                        setDescripcion(evento.target.value);
                                    }} 
                                ></textarea>
                                <label for="floatingTextarea">Descripción</label>
                            </div>

                            <div class="row mt-3">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-currency-dollar"></i>
                                        </span>
                                        <input 
                                            id="precio" 
                                            type="number" 
                                            class="form-control" 
                                            placeholder="Precio"
                                            onChange={(evento)=>{
                                                setPrecioUnitario(evento.target.value);
                                            }} 
                                        />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-columns-gap"></i>
                                        </span>
                                        <input 
                                            id="clasificacion" 
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Clasificacion" 
                                            onChange={(evento)=>{
                                                setClasificacion(evento.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-clipboard2-plus-fill"></i>
                                        </span>
                                        <input 
                                            id="proveedor" 
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Proveedor" 
                                            onChange={(evento)=>{
                                                setProveedor(evento.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-box-seam"></i>
                                        </span>
                                        <input 
                                            id="presentacion" 
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Presentación" 
                                            onChange={(evento)=>{
                                                setPresentacion(evento.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-download"></i>
                                        </span>
                                        <input 
                                            id="peso" 
                                            type="number" 
                                            class="form-control" 
                                            placeholder="Peso" 
                                            onChange={(evento)=>{
                                                setPeso(evento.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-arrows-fullscreen"></i>
                                        </span>
                                        <input 
                                            id="volumen" 
                                            type="number" 
                                            class="form-control" 
                                            placeholder="Volumen" 
                                            onChange={(evento)=>{
                                                setVolumen(evento.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-calendar3"></i>
                                        </span>
                                        <input 
                                            id="fechaIn" 
                                            type="date" 
                                            class="form-control" 
                                            placeholder="Fecha Ingreso" 
                                            onChange={(evento)=>{
                                                setFechaIngreso(evento.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="bi bi-bag-check-fill"></i>
                                        </span>
                                        <input 
                                            id="garantia" 
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Garantía" 
                                            onChange={(evento)=>{
                                                setGarantia(evento.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        
                                        <input 
                                            id="aplicaDes" 
                                            type="text" 
                                            placeholder="Aplica descuento" 
                                            class="form-control"
                                            onChange={(evento)=>{
                                                setAplicaDescuento(evento.target.value);
                                            }} 
                                        />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <button type="submit" class="btn btn-warning">Enviar</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </>

    );

}