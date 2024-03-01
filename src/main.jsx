import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./Pages/HomePage";
import MovieDetail from "./Pages/MovieDetail";
import Middleware from "./Pages/Middleware";
import WatchList from "./Pages/WatchList";
import GenrePage from "./Pages/GenrePage";
import MovieListPage from "./Pages/MovieListPage";
import Search from "./Pages/SearchPage";

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
          <Route
            path="/moviedetail/:id"
            element={
              <Middleware>
                <MovieDetail />
              </Middleware>
            }
          />
          <Route
            path="/movielist/:context"
            element={
              <Middleware>
                <MovieListPage />
              </Middleware>
            }
          />
          <Route
            path="/search/:context"
            element={
              <Middleware>
                <Search />
              </Middleware>
            }
          />
          <Route
            path="/search"
            element={
              <Middleware>
                <Search />
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
          <Route
            path="/genre"
            element={
              <Middleware>
                <GenrePage />
              </Middleware>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
