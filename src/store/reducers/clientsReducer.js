import { GET_CLIENTS, ERROR } from '../actions/types';

const initialState = {
  clients: [],
  loading: true,
  error: ''
}

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return { ...state, clients: action.clients, loading: action.loading }
    default:
      return state;
  }
}

export default clientsReducer