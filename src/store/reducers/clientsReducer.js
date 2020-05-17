import { GET_CLIENTS, GET_PHOTOS_CLIENT, ID_CLIENT_SELECTED, SET_CLIENT_SELECTED, ERROR  } from '../actions/types';

const initialState = {
  clients: [],
  photosClient: [],
  idClientSelect: 0,
  clientSelected: {},
  loading: true,
  error: ''
}

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return { ...state, clients: action.clients, loading: action.loading }
    case GET_PHOTOS_CLIENT:
      return { ...state, photosClient: action.photosClient, loading: action.loading }
    case ID_CLIENT_SELECTED:
      return { ...state, idClientSelect: action.idClientSelect }
    case SET_CLIENT_SELECTED:
      return { ...state, clientSelected: action.clientSelected }
    default:
      return state;
  }
}

export default clientsReducer