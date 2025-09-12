import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button } from './Button';

function App() {
  const [count, setCount] = useState(0);

  // Lista di animali
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  // Stato per colore sfondo e contatore dei cambi
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [colorChangeCount, setColorChangeCount] = useState(0);

  // Funzioni per i bottoni
  const goToGoogle = () => window.location.href = "https://google.com";
  const sayHello = () => alert("Ciao!");

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
    setColorChangeCount(prev => prev + 1);
  };

  // Funzione reset
  const resetAll = () => {
    setBackgroundColor("white");
    setColorChangeCount(0);
    setCount(0);
  };

  return (
    <div style={{ backgroundColor, minHeight: "100vh", padding: "20px" }}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Lista animali */}
      <h2>Animals:</h2>
      <ul>
        {animals.map((animal) =>
          animal.startsWith("L") ? <li key={animal}>{animal}</li> : null
        )}
      </ul>

      {/* Bottoni con props */}
      <h2>Custom Buttons:</h2>
      <Button text="Google" color="red" fontSize={16} handleClick={goToGoogle} />
      <Button text="Ciao" color="green" fontSize={18} handleClick={sayHello} />
      <Button /> {/* usa i default props */}

      {/* Bottoni per cambiare colore */}
      <h2>Change Background Color:</h2>
      <Button text="Rosso" color="red" handleClick={() => changeBackgroundColor("red")} />
      <Button text="Blu" color="blue" handleClick={() => changeBackgroundColor("blue")} />
      <Button text="Verde" color="green" handleClick={() => changeBackgroundColor("green")} />
      <Button text="Yellow" color="yellow" handleClick={() => changeBackgroundColor("yellow")} />
      <Button text="Purple" color="purple" handleClick={() => changeBackgroundColor("purple")} />

      {/* Bottone Reset */}
      <h2>Reset Background Color:</h2>
      <Button text="Reset" color="orange" handleClick={resetAll} />

      <p>Il colore dello sfondo è cambiato {colorChangeCount} volte</p>
    </div>
  );
}

export default App;
