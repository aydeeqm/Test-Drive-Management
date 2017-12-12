import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'redux-zero/react';
//import Footer from './Footer';
import { signIn} from './actions';
import './Login.css';

const InitPage = ({ successLogin }) => {
    return (
        <div className='view-container sessions new'>
            {
                successLogin && <Redirect to="/boards" />
            }
            <main>
                <img className="logo"alt="logoebiz" src="img/logoblanco.png" />
                
                {/* <header className="barEstado bgAzulPantone">
                    <img className="logo"alt="logoebiz" src="" />
                </header> */}
                <form id='sign_in_form' onSubmit={
                    e => {
                        e.preventDefault();
                        signIn(this.emailInputRef.value, this.passwordInputRef.value)
                    }
                }>
                    
                <div class="container">
                    <div class="col-xs-12 col-md-4 col-md-offset-4">
                        <div class="panel panel-default">
                            <div class="panel-body">
                                <br/><div className='form-group'>
                                    <div>
                                        <i class="fa fa-user text-AzulPantone" aria-hidden="true"></i>
                                        <label>Usuario </label>
                                    </div>
                                    <input class="form-control" type="email" id='user_email' placeholder="Email" ref={e => this.emailInputRef = e} required />
                                </div>
                                <div className='form-group'>
                                <div>
                                        <i class="fa fa-user text-AzulPantone" aria-hidden="true"></i>
                                        <label>Contraseña </label>
                                    </div>
                                    <input class="form-control" type="password" id='user_password' placeholder="Password" ref={e => this.passwordInputRef = e} required />
                                </div><br/> 
                                <button class="form-control" type='submit'>Ingresar</button>
                                <div className='second_view text-right '><br/>
                                    <NavLink className=" a-none-decoration" to={"/Signup"}>Si eres nuevo ¡crea una cuenta!  </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                </form>
            </main>
        </div>
    )
}

const Signin = ({ successLogin }) => {
    return (
        <div id='main_container'>
            <InitPage successLogin={successLogin} />
        </div>)
}

const mapToProps = ({ successLogin }) => ({ successLogin });
export default connect(mapToProps)(Signin);