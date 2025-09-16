import React from 'react';
import { contatoInfo } from '../data/mockData';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contato">
      <h2>Fale Conosco</h2>
      <p>Por favor, nos indique suas dúvidas, reclamações, sugestões ou elogios...</p>
      
      <div className="contato-info">
        <div className="info-item">
          <h3>Telefone</h3>
          <p>{contatoInfo.telefone}</p>
        </div>
        
        <div className="info-item">
          <h3>Email</h3>
          <p>{contatoInfo.email}</p>
        </div>
        
        <div className="info-item">
          <h3>Horário de Funcionamento</h3>
          <p>{contatoInfo.horarioFuncionamento}</p>
        </div>
        
        <div className="info-item">
          <h3>Endereço</h3>
          <p>{contatoInfo.endereco}</p>
          <p>CEP: {contatoInfo.cep}</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Pizzaria Avenida. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
