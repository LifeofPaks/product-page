import './App.scss';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Cart/> */}
      <Product/>
    </div>
  );
}

export default App;
