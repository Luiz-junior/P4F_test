import api from '../../services/api';

import { GET_CLIENTS, ERROR } from './types';

export const getClients = () => {
  return async dispatch => {
    const res = await api.get(`/users`)

    console.log('res: ', res.data)

    try {
      dispatch({
        type: GET_CLIENTS,
        clients: res.data,
        loading: false
      })
    } catch (error) {
      dispatch({ type: ERROR, errorStatus: res.data, loading: false })
    }
  }
}