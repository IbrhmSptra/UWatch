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
import WatchList from "./Pages/WatchList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Middleware>
                <HomePage />
              </Middleware>
            }
          />
          <Route path="/authpage" element={<AuthPage />} />
          <Route
            path="/moviedetail/:id"
            element={
              <Middleware>
                <MovieDetail />
              </Middleware>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Middleware>
                <WatchList />
              </Middleware>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
