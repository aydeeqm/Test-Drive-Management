import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'redux-zero/react';
import { signUp } from './actions'

var reservaactualA=window.sessionStorage.getItem('ReservaActual');
const Register = () => {
    return (
        <div id='FinalReserva'>
            <div>
                <input id="datosGeneradosReserva" value={reservaactualA}/>
            </div>
            {/* <Footer/> */}
        </div>

    )
}
export default Register