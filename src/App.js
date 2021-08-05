import logo from './logo.svg';
import './App.css';
import Menu from './components/Navbar'
import Cart from './components/CartWidget'
import List from './components/ItemListContainer'



function App() {
  return (
    <>
      <Menu/>
      <Cart/>
      <List/>

    </>
  )
}

export default App;
