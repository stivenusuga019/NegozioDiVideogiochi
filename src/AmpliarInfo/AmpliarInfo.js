import { useLocation } from 'react-router-dom'
import './AmpliarInfo.css'


export function AmpliarInfo(){

    let location = useLocation();
    let producto = location.state.producto;


    return(
        <>

            

            <div class="container mTB">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <img 
                            src={producto.foto}
                            class="img-fluid w-100" 
                            alt="foto" 
                        />
                    </div>
                    <div class="col-12 col-md-4 border p-3 rounded shadow">
                        <h2 class="fw-bold">{producto.nombre}</h2>
                        <i class="bi bi-star-fill text-warning fs-3 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-3 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-3 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-3 ms-1"></i>
                        <i class="bi bi-star-fill fs-3 ms-1"></i>
                        <br/>
                        <span class="badge text-bg-warning mt-3">Más vendido</span>
                        <br/>
                        <br/>
                        <h3>${producto.precio}</h3>
                        <span class="badge text-bg-primary mt-3">Oferton</span>
                        <br/>
                        <h5 class="text-muted mt-3" >Hasta 48 cuotas</h5>
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/negoziodivideogiochi-c4dbe.appspot.com/o/visa.png?alt=media&token=13fcf47f-a65d-42d7-b684-839e9eae9014" 
                            class="img-fluid" 
                            alt="icono" 
                        />
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/negoziodivideogiochi-c4dbe.appspot.com/o/mastercard.png?alt=media&token=25d9acbb-bfd7-47a4-ae2e-4b4d39e6b3cb" 
                            class="img-fluid ms-3" 
                            alt="icono" 
                        />
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/negoziodivideogiochi-c4dbe.appspot.com/o/americanexpress.png?alt=media&token=e7efa0b4-f7f1-4f08-9bf7-fe20569ea5ad" 
                            class="img-fluid ms-3" 
                            alt="icono" 
                        />
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/negoziodivideogiochi-c4dbe.appspot.com/o/efectivo.png?alt=media&token=c83f2e09-b553-4147-b1a7-ac42ff3eb363" 
                            class="img-fluid ms-3" 
                            alt="icono" 
                        />
                        <br/>
                        <span><i class="bi bi-truck display-3 my-3"></i>
                            <p class="fs-6">Entregas a todo Medellin y Valle de Aburrá</p>
                        </span>
                        <br/>
                        <form>
                            <label class="form-label fs-5">Cantidad</label>
                            <input class="form-control" type="number" value="1"></input>
                            <button type="submit" class="btn btn-warning mt-2 w-100" >
                                <i class="bi bi-cart4"></i>
                                Añadir
                            </button>
                        </form>
                        <p>{producto.descripcion}</p>
                    </div>
                </div>
            </div>


        </>
    )

}