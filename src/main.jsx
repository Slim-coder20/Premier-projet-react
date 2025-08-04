// Les dépendances

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// les composants react

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>

  /*
   Le strict Mode de react Execute deux fois chaque composants 
   Execute deux fois les useEffect 
   Il va vérifier que les composants n'utilise pas des méthodes deprecié 
  */
);
