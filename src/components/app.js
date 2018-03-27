import React from 'react'
<<<<<<< HEAD
import { connect } from 'react-redux'
import MyMap  from './map'
import Login  from './Login'
import Inscription  from './inscription'

import { render } from 'react-dom'
import Autentication from './auntentication'
import Ubication from './ubication'
import './styles.css';


 



const App = ({ paginaActual, navigateTo }) => {
  switch (paginaActual) {
    case 'pagina-1':
      return <Inscription
      navigateTo={navigateTo}/>
    case 'pagina-2':
      return <Login
      navigateTo={navigateTo}/>
    case 'pagina-3':
      return <MyMap
      navigateTo={navigateTo}/>
    default:
      break;
  }
  return null
}

const mapStateToProps = ({ paginaActual }) => ({
  paginaActual
});

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (pagina) => {
    dispatch({
      type: 'NAVIGATE_TO',
      pagina
    })
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const App = () => (
  <div className="main">
  <Autentication/>
  <Ubication/>
  </div>
);
export default App

