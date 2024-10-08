import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./Styles/app.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
