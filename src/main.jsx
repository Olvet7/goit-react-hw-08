import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/App.jsx";
import "./index.css";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter>
        {/* <App /> */}
        <App/>
      </BrowserRouter>
    </Provider>
    </PersistGate>    
  </React.StrictMode>
);
