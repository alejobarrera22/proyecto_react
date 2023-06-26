import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Error404 from './components/Error404';
import Cart from './components/Cart';
import CartContextProvider from './components/context/CartContext';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className='container-fluid'>
      <CartContextProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path={"/"} element={<ItemListContainer/>}/>
            <Route path={"/category/:id"} element={<ItemListContainer/>}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
            <Route path={"/cart"} element={<Cart/>}/>
            <Route path={"/checkout"} element={<Checkout/>}/>
            <Route path={"/*"} element={<Error404/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter> 
      </CartContextProvider>
    </div>
  );
}

export default App;
