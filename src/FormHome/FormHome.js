import './FormHome.css'

export function FormHome() {

    return (

        <>

            <br />
            <br />
            <br />
            <h4 class="textoForm">Información, peticiones o reclamos</h4>
            <div id="form-main">
                <div id="form-div">
                    <form class="form" id="form1">
                        <p class="name">
                            <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Nombre" id="name" />
                        </p>
                        <p class="email">
                            <input name="email" type="text" class="validate[required,custom[email]] feedback-input" id="Correo Electronico" placeholder="Email" />
                        </p>
                        <p class="text">
                            <textarea name="text" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Problema O Solicitud"></textarea>
                        </p>
                        <div class="submit">
                            <input type="submit" value="Enviar" id="button-orange" />
                            <div class="ease"></div>
                        </div>
                    </form>
                </div>
            </div>
            <br />
            <br />
            <br />

        </>

    );

}