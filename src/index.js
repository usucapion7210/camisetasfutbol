import React from "react"; //import de react
import ReactDOM from "react-dom/client";
//libreria de react dom: renderizar la app en el DOM
import App from "./App";
import "./estilos.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // punto de entrada que se referencia con el id root del index.html
root.render(<App />);
