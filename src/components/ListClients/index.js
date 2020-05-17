import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ClientsContainer, ListContainer } from './styles'
import { getClients, idClientSelected } from '../../store/actions/clientsAction'

function ListClients() {
  let dispatch = useDispatch()

  let { clients } = useSelector(state => ({
    clients: state.clientsReducer.clients
  }))

  useEffect(() => {
    dispatch(getClients())
  }, [])

  const onSelectClient = (id) => {
    dispatch(idClientSelected(id))
  }

  if(!clients.length) {
    <strong>Carregando...</strong>
  }

  return (
    <ClientsContainer>
      {clients.map((client, index) => {
        return (
          <ListContainer key={client.id} onClick={() => onSelectClient(client.id)}>
            <div className="nameClient">{client.name}</div>
            <div className="userClient">{client.username}</div>
            <div className="companyClient">{client.company.name}</div>
          </ListContainer>
        )
      })}
    </ClientsContainer>
  )
}

export default ListClients
