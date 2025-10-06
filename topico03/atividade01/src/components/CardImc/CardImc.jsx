import { useState, useEffect } from 'react';
import './style.css';

export default function CardImc({ pessoa }) {
  const [peso, setPeso] = useState(pessoa.peso);
  const [altura] = useState(pessoa.altura);
  const [imc, setImc] = useState(peso / (altura ** 2));
  const [cor, setCor] = useState('green');

  useEffect(() => {
    const novoImc = peso / (altura ** 2);
    setImc(novoImc);

    if (novoImc <= 24.5) {
      setCor('green');
    } else if (novoImc > 24.5 && novoImc < 30) {
      setCor('yellow');
    } else {
      setCor('red');
    }
  }, [peso, altura]);

  const aumentarPeso = () => setPeso((prev) => prev + 1);
  const diminuirPeso = () => setPeso((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="imcCard" style={{ backgroundColor: cor, borderRadius: '30px', textAlign: 'center', }}>
      <h2>{pessoa.nome}</h2>
      <p>Altura: {altura} m</p>
      <p>Peso: {peso} kg</p>
      <div className="botoes-container">
        <button onClick={diminuirPeso}>-</button>
        <button onClick={aumentarPeso}>+</button>
      </div>
      <p>IMC: {imc.toFixed(2)}</p>
    </div>
  );
}
