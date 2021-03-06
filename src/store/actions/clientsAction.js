import axios from "axios";

import api from "../../services/api";
import {
  GET_CLIENTS,
  GET_PHOTOS_CLIENT,
  ID_CLIENT_SELECTED,
  SET_CLIENT_SELECTED,
  GET_POSTS_CLIENT,
  ERROR,
} from "./types";

export const getClients = () => {
  return async (dispatch) => {
    const res = await api.get(`/users`);

    try {
      dispatch({
        type: GET_CLIENTS,
        clients: res.data,
        loading: false,
      });
    } catch (error) {
      dispatch({ type: ERROR, errorStatus: error, loading: false });
    }
  };
};

export const getPhotosClient = (id) => {
  return async (dispatch) => {
    let res = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${id}&_limit=10`
    );

    try {
      dispatch({
        type: GET_PHOTOS_CLIENT,
        photosClient: res.data,
        loading: false,
      });
    } catch (error) {
      dispatch({ type: ERROR, errorStatus: error, loading: false });
    }
  };
};

export const idClientSelected = (id) => {
  return {
    type: ID_CLIENT_SELECTED,
    idClientSelect: id,
  };
};

export const setClientSelected = (clientSelected) => {
  return {
    type: SET_CLIENT_SELECTED,
    clientSelected,
  };
};

export const getPostsClient = (id) => {
  return async (dispatch) => {
    let res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );

    try {
      dispatch({
        type: GET_POSTS_CLIENT,
        postsClient: res.data,
        loading: false,
      });
    } catch (error) {
      dispatch({ type: ERROR, errorStatus: error, loading: false });
    }
  };
};
