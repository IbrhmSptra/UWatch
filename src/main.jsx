import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthPage from "./Pages/AuthPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./Pages/HomePage";
import MovieDetail from "./Pages/MovieDetail";
import Middleware from "./Pages/Middleware";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route
            path="/homepage"
            element={
              <Middleware>
                <HomePage />
              </Middleware>
            }
          />
          <Route
            path="/moviedetail/:id"
            element={
              <Middleware>
                <MovieDetail />
              </Middleware>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
