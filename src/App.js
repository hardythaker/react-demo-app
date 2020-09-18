import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <main>
      <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/products" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
      </Switch>
      </main>
      <Modal></Modal>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
