import React, { useState } from 'react';
import { pizzariaInfo, diferenciais, cardapioCategorias, menuItems } from '../data/mockData';
import './Main.css';

const Main = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  const handleCategoriaClick = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  const renderCardapioDetalhado = () => {
    if (!categoriaSelecionada) return null;

    const itens = menuItems[categoriaSelecionada.toLowerCase()];
    
    return (
      <div className="cardapio-detalhado">
        <h3>Cardápio - {categoriaSelecionada}</h3>
        <div className="itens-grid">
          {itens.map(item => (
            <div key={item.id} className="item-cardapio">
              <h4>{item.nome}</h4>
              <p className="ingredientes">{item.ingredientes}</p>
              <p className="preco">R$ {item.preco.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <button 
          className="btn-fechar" 
          onClick={() => setCategoriaSelecionada(null)}
        >
          Fechar Cardápio
        </button>
      </div>
    );
  };

  return (
    <main>
      <img src="/pizza_principal.jpg" alt="Pizza Grande" className="pizza-grande" />
      
      <article>
        <h2>{pizzariaInfo.slogan}</h2>
        <p>{pizzariaInfo.descricao}</p>
        <p>{pizzariaInfo.convite}</p>
      </article>

      <span id="diferenciais"></span>
      <section id="diferenciais-section">
        <h2>Nossos Diferenciais</h2>
        <ul>
          {diferenciais.map((diferencial, index) => (
            <li key={index}>{diferencial}</li>
          ))}
        </ul>
        <img src="/diferenciais/forno.jpg" alt="Forno a lenha" />
        <p><i>* Reserve um lugar no estacionamento com antecedência, pelo fone: {pizzariaInfo.telefone}</i></p>
      </section>

      <section id="cardapio">
        <h2>Cardápio: Pizzas Salgadas, Doces e Calzones</h2>
        <p>Clique sobre a tipo de pizza para ver o cardápio completo</p>
        
        {renderCardapioDetalhado()}
        
        {!categoriaSelecionada && (
          <div className="cardapio-cards">
            {cardapioCategorias.map(categoria => (
              <div 
                key={categoria.id} 
                className="cardapio-card"
                onClick={() => handleCategoriaClick(categoria.nome)}
              >
                <img 
                  src={categoria.imagem} 
                  alt={categoria.nome} 
                  width="300" 
                  height="250" 
                />
                <p>{categoria.nome}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section id="mapa">
        <h2>Localização</h2>
        <p>Próximo ao centro de Pelotas</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.3278752903702!2d-52.339052884888204!3d-31.761542181290515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b5a3b0538cdf%3A0x6b973441616465c2!2sAv.%20Bento%20Gon%C3%A7alves%2C%203450%20-%20Porto%2C%20Pelotas%20-%20RS%2C%2096015-140!5e0!3m2!1spt-BR!2sbr!4v1648687292529!5m2!1spt-BR!2sbr"
          width="100%" 
          height="450" 
          style={{border: 0}} 
          allowFullScreen="" 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
};

export default Main;
