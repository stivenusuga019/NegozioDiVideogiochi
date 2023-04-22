import './Home.css'
import { AcercaDe } from '../AcercaDe/AcercaDe';
import { Servicios } from '../Servicios/Servicios';
import { Galeria } from '../Galeria/Galeria';
import { FormHome } from '../FormHome/FormHome';

export function Home (){

    return (

        <>
        
            <section>
                <div class="banner">
                    <h1>Bienvenido...</h1>
                </div>
            </section>
            <AcercaDe/>
            <Servicios/>
            <Galeria/>
            <FormHome/>
            
        </>

    );

}