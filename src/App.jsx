import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const viteAppKey = import.meta.env.VITE_APP_KEY;
  const viteAppKeyProcess = import.meta.env.VITE_APP_KEY;
  const reactAppKey = import.meta.env.REACT_APP_KEY;
  const appKey = import.meta.env.APP_KEY;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
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
      <p>
        {viteAppKey ? (
          <strong>`${viteAppKey} import.meta.env`</strong>
        ) : (
          "variable viteAppKey no existe"
        )}
      </p>
      <p>
        {viteAppKeyProcess ? (
          <strong>`${viteAppKeyProcess} windows.proccess.env`</strong>
        ) : (
          "variable viteAppKeyProcess no existe"
        )}
      </p>
      <p>
        {reactAppKey ? (
          <strong>`${reactAppKey} import.meta.env`</strong>
        ) : (
          "la variable reactAppKey no existe"
        )}
      </p>
      <p>
        {appKey ? (
          <strong>`${appKey} import.meta.env`</strong>
        ) : (
          "la variable appKey no existe"
        )}
      </p>
    </>
  );
}

export default App;
