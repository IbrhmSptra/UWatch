import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const AUTHORIZATION = import.meta.env.VITE_AUTHORIZATION;

export const getNowPlaying = (callback) => {
  axios
    .get(`${BASE_URL}/movie/now_playing?language=en-US&page=1`, {
      headers: {
        Authorization: `${AUTHORIZATION}`,
      },
    })
    .then((res) => {
      callback(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getVideoMovie = (callback, id) => {
  axios
    .get(`${BASE_URL}/movie/${id}/videos?language=en-US`, {
      headers: {
        Authorization: `${AUTHORIZATION}`,
      },
    })
    .then((res) => {
      callback(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const searchMovies = (callback, query, page = 1) => {
  axios
    .get(
      `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
      {
        headers: {
          Authorization: `${AUTHORIZATION}`,
        },
      }
    )
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTopRated = (callback, page = 1) => {
  axios
    .get(`${BASE_URL}/movie/top_rated?language=en-US&page=${page}`, {
      headers: {
        Authorization: `${AUTHORIZATION}`,
      },
    })
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTrendingWeek = (callback) => {
  axios
    .get(`${BASE_URL}/trending/movie/week?language=en-US`, {
      headers: {
        Authorization: `${AUTHORIZATION}`,
      },
    })
    .then((res) => {
      callback(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMovieByGenre = (callback, genre, page = 1) => {
  axios
    .get(
      `${BASE_URL}/discover/movie?include_adult=false&language=en-US&page=${page}&with_genres=${genre}`,
      {
        headers: {
          Authorization: `${AUTHORIZATION}`,
        },
      }
    )
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDetailMovie = (callback, id) => {
  axios
    .get(`${BASE_URL}/movie/${id}?language=en-US`, {
      headers: {
        Authorization: `${AUTHORIZATION}`,
      },
    })
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      callback(err);
    });
};

export const getSimilarMovies = (callback, id) => {
  axios
    .get(`${BASE_URL}/movie/${id}/similar?language=en-US&page=1`, {
      headers: {
        Authorization: `${AUTHORIZATION}`,
      },
    })
    .then((res) => {
      callback(res.data.results);
    })
    .catch((err) => {
      callback(err);
    });
};
