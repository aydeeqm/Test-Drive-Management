import React from 'react';
import './index.css';
import Signin from './Login';
import Register from './Signup';
import Catalogo from './Catalogo'
//import Boards from './Boards';
//import DetaBoards from './Detailsboard';
import { HashRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'redux-zero/react';

const App = ({ successLogin, data}) => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Register} />
        <Route path="/catalogo" render={ () => <Catalogo data={data} successLogin={successLogin}/>} />
      </Switch>
    </HashRouter>
  )
}

const mapToProps = ({ successLogin, data}) => ({ successLogin, data});
export default connect(mapToProps)(App);
