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
