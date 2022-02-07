import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header1 from './Components/Header1';
import  products  from './data/products';
import Home from './Components/Home';
import ProductCard from './Components/ProductCard';
import { CartProvider } from 'react-use-cart';
import Cart from './screens/Cart';


function App() {
  return (
    <div className="App">
      <Header1/>
      <CartProvider>
        <Home/>
        <Cart/>
      </CartProvider>
      
    </div>
  );
}

export default App;
