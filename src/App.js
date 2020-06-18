import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponents'
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/" >
            Ristorante Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
      <React.StrictMode>
        <Menu/>
      </React.StrictMode>
    </div>
  );
}

export default App;
