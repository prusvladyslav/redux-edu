import React,{Component,useState} from 'react';
import './App.css';
import Modal from './components/modal.jsx';
import AppBody from './components/appbody.jsx';
import {Route,BrowserRouter,Switch,Redirect,withRouter} from 'react-router-dom';
import Favorites from './components/favorites.jsx';
import Cart from './components/cart.jsx';
function App(props) {
  
  
  return (

    <div className="App">
      <header className="App-header">
    <Switch>
<Route exact path='/'>
  <Redirect to='/appbody'></Redirect>
</Route>
        <Route exact path="/appbody" component={AppBody}/>

        <Route path='/favorites' component={Favorites}/>
        <Route path='/cart' component={Cart}/>
    </Switch>
      </header>
    </div>
   
  )
}

export default withRouter(App); 
