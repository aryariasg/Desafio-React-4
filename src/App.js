import React from 'react';
import './App.css';
import Menu from './components/Navbar'
import Cart from './components/CartWidget'
import List from './components/ItemListContainer'
import ItemCount from './components/ItemCount'




function App() {
  return (
    <>
      <Menu/>
      <Cart/>
      <List/>
      <ItemCount initial = { 1}stock = {30} onAdd = {() => console.log ('Se agrego al carrito') } />


    </>
  )
}

export default App;
