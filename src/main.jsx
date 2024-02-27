import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthPage from "./Pages/AuthPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
