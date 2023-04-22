import './Tienda.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { consultarProductos } from '../services/buscarProductos'

export function Tienda() {


    const [productostienda, setProductosTienda] = useState("")
    const [estadocarga, setEstadoCarga] = useState(true)


    function cambiarFoto(evento) {

        evento.preventDefault();
        evento.target.classList.remove("sombra");

    }

    function cambiarFoto2(evento) {

        evento.preventDefault();
        evento.target.classList.add("sombra");

    }

    let navegador = useNavigate();
    function pasarInformacion(producto) {

        navegador('/compras', {
            state: { producto }
        });
        console.log(producto);

    }


    useEffect(() => {

        consultarProductos()
            .then((respuesta) => {

                setEstadoCarga(false)
                setProductosTienda(respuesta)

            })

    }, [])

    if (estadocarga == true) {
        return (
            <>
                <h1>estamos cargando...</h1>
            </>
        )
    } else {

        return (
    
            <>
    
                <div class="row row-cols-1 row-cols-md-4 g-5 my-5 mTB">
                    {
                        productostienda.map(function(producto){
                            return (
                                <div class="col zoom texto espacio" onClick={() => { pasarInformacion(producto) }}>
                                    <div class="card shadow h-100">
                                        <h2 class="text-light text-center fw-bold">{producto.nombre}</h2>
                                        <img
                                            src={producto.foto}
                                            alt="foto"
                                            class="img-fluid sombra"
                                            onMouseOver={cambiarFoto}
                                            onMouseLeave={cambiarFoto2}
                                        />
                                        <p class="text-light text-center">{producto.descripcion}</p>
                                        <h3 class="text-light text-center fw-bold">${producto.precioUnitario}.00 COP
                                            <span class="col-6 text-end">
                                                <i class="ms-5 bi bi-cart4 fs-1"></i>
                                            </span>
                                        </h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
    
            </>
    
        )
        
    }

}