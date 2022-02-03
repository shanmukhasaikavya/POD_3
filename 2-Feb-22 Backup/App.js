import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import Login from './screens/Login';
import Register from './screens/Register';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import Home from './screens/Home';

function App() {
  return (
    <div>

<BrowserRouter>
<Header/>
<Routes>
<Route exact path='/' element={<Home/>} />
<Route exact path='register' element={<Register/>} />
<Route exact path='login' element={<Login/>} />
</Routes>
</BrowserRouter>
    

    </div>

      
  );
}

export default App;
