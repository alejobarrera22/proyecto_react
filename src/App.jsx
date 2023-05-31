import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetail';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Error404 from './components/Error404';

function App() {
  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path={"/"} element={<ItemListContainer/>}/>
          <Route path={"/category/:id"} element={<ItemListContainer/>}/>
          <Route path={"/*"} element={<Error404/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
