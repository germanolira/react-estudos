import { useState } from 'react';
import Api from './Api';
import './App.css';

function App() {
  const [count, setCount] = useState(0); // Declaração do estado inicial

  return (
    <>
      <div className="container">
        <h1>Hello World</h1>
        <p>You clicked {count} times</p> {/* Mostra quantas vezes o botão foi clicado */}
        <button onClick={() => setCount(count + 1)}>Aumentar +1</button> {/* Aumenta o valor do estado */}
        {/* Mas respeitando a imutabilidade do React e aumentando o valor de setCount */}
      </div>

      <Api />
    </>
  );
}

export default App;