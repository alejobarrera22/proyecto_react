import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='container-fluid'>
      <Header/>
      <ItemListContainer greeting={"No se encontraron productos por ahora..."}/>
      <Footer/>
    </div>
  );
}

export default App;
