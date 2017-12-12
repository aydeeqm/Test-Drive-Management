import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'redux-zero/react';
import { signUp } from './actions'
import './Signup.css';

// import Footer from './Footer';
// import './css/body.css';

const SecondView = ({ successLogin }) => {
    return (
        <div className="view-containerRegister ">
            {
                successLogin && <Redirect to="/boards" />
            }
            <main>
                <header className="barEstado bg-">
                    <img className="logo"alt="logoebiz" src="img/logoblanco.png" />
                </header>
                    <form id="sign_up_form" onSubmit={
                        e => {
                            e.preventDefault();
                            signUp(this.fullNameRef.value, this.lastnameRef.value,this.fechaNacimientoRef.value,this.generoRef.value, this.emailRef.value, this.passwordRef.value)
                        }
                    }>

                        <div class="container">
                            <div class="col-xs-12 col-md-8 col-md-offset-2">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                        <br/>
                                        <div className='form-group'>
                                            <label>Quien eres?</label>
                                            <div className='row'>
                                                <div class='col-md-6 col-xs-12'>
                                                    <div className='form-group'>
                                                        <div>
                                                            <i class="fa fa-user text-AzulPantone" aria-hidden="true"></i>
                                                            <label>Nombre </label>
                                                        </div>
                                                        <input className='form-control' id="user_first_name" type="text" placeholder="First name" ref={e => this.fullNameRef = e} required="" />
                                                    </div>
                                                </div>
                                                <div class='col-md-6 col-xs-12'>
                                                    <div className='form-group'>
                                                        <div>
                                                            <i class="fa fa-user text-AzulPantone" aria-hidden="true"></i>
                                                            <label>Apellidos </label>
                                                        </div>
                                                        <input className='form-control' id="user_last_name" type="text" placeholder="Apellidos" ref={e => this.lastnameRef = e}  required=""  />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div class='col-md-6 col-xs-12'>
                                                    <div className='form-group'>
                                                        <div>
                                                            <i class="fa fa-user text-AzulPantone" aria-hidden="true"></i>
                                                            <label>Fecha de Nacimiento </label>
                                                        </div>
                                                        <input  className='form-control' id="fechaNacimiento" type="date" placeholder="mm/dd/yyyy" ref={e => this.fechaNacimientoRef = e} required="" />
                                                    </div>
                                                </div>
                                                <div class='col-md-6 col-xs-12'>
                                                    <div className='form-group'>
                                                        <div>
                                                            <i class="fa fa-user text-AzulPantone" aria-hidden="true"></i>
                                                            <label>Género </label>
                                                        </div>
                                                        <select className='form-control' id="user_genero" type="text"  ref={e => this.generoRef = e}  required=""  >
                                                            <option>Femenino</option>
                                                            <option>Masculino</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className='form-group'>
                                            <label>Como quieres iniciar sesion?</label>
                                            <div className='row'>
                                                <div class='col-md-6 col-xs-12'>
                                                    <div className='form-group'>
                                                        <div>
                                                            <i class="fa fa-user text-AzulPantone" aria-hidden="true"></i>
                                                            <label>Nombre de Cuenta (Correo Electronico) </label>
                                                        </div>
                                                        <input className='form-control' id="user_email" type="email" placeholder="Email" ref={e => this.emailRef = e} required="" />
                                                    </div>
                                                    <div className='form-group'>
                                                        <div>
                                                            <i class="fa fa-user text-AzulPantone" aria-hidden="true"></i>
                                                            <label>Crea una contraseña </label>
                                                        </div>
                                                        <input className='form-control' id="user_password" type="password" placeholder="Password" ref={e => this.passwordRef = e} required="" />
                                                    </div>
                                                </div>
                                                <div class='col-md-6 col-xs-12 text-center'>
                                                    <img alt='imagen?' width='300px' src='http://suzukiautos.com.co/wp-content/uploads/2015/08/dzire_926x400_blanco.png'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-xs-12 col-md-6 col-md-offset-6'>
                                            <button class="form-control" type="submit">Sign up</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                        {/* <div className="field">
                            <input id="user_first_name" type="text" placeholder="First name" ref={e => this.fullNameRef = e} required="" />
                        </div>
                        <div className="field">
                        <input id="user_last_name" type="text" placeholder="Last name" ref={e => this.lastnameRef = e}  required=""  />
                        </div>
                        <div className="field">
                        <input id="user_email" type="email" placeholder="Email" ref={e => this.emailRef = e} required="" />
                        </div>
                        <div className="field">
                        <input id="user_password" type="password" placeholder="Password" ref={e => this.passwordRef = e} required="" />
                        </div> */}
                        
                    
                    {/* <div className='second_view'>
                        <NavLink to={"/signin"}>Sign in</NavLink>
                    </div> */}
            </main>
        </div>
    )
}

const Register= ({ successLogin }) => {
    return (
        <div id='main_container'>
            <div>
                <SecondView successLogin={successLogin }/>
            </div>
            {/* <Footer/> */}
        </div>
        
        )
}

const mapToProps = ({ successLogin }) => ({ successLogin })
export default connect(mapToProps)(Register);