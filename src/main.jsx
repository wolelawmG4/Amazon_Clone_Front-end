import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./Components/DataProvider/DataProvider";
import { initialState, reducer } from "./Utility/reducer";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  // <BrowserRouter future={{ v7_startTransition: true }}>
    <DataProvider reducer={reducer} initialState={initialState}>
     
      <App />
      
    </DataProvider>
  // {/* </BrowserRouter> */}
);
