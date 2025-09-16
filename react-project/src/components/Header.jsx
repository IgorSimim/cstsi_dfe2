import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <img src="/logo.jpg" alt="Logo da Pizzaria" width="120" height="90" />
      <nav>
        <ul>
          <li><a href="#diferenciais">Diferenciais</a></li>
          <li><a href="#cardapio">Cardápio</a></li>
          <li><a href="#mapa">Localização</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <h1>Pizzaria Avenida</h1>
    </header>
  );
};

export default Header;
