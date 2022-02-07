import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header1 from './Components/Header1';
import ChangePassword from './Components/ChangePassword';
import { BrowserRouter, Switch, Route,Redirect } from "react-router-dom";


function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Header1/>
        <Route exact path='/changepassword' component={ChangePassword} />
      </BrowserRouter>
    </div>
  );
}

export default App;
