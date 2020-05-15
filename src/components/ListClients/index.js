import React from 'react'

import { ClientsContainer, ListContainer } from './styles'

function ListClients() {

  let list = [
    { name: 'Luiz', user: 'luiz@gmail.com', company: 'Sistema User ME' },
    { name: 'Kelly', user: 'kelly@gmail.com', company: 'Sistema Kelly ME' },
    { name: 'Dante', user: 'dante@gmail.com', company: 'Sistema Dante ME' },
    { name: 'Divina', user: 'divina@gmail.com', company: 'Sistema Divina ME' },
  ]

  return (
    <ClientsContainer>
      {list.map((client, index) => {
        return (
          <ListContainer key={index} onClick={() => {}}>
            <div className="nameClient">{client.name}</div>
            <div className="userClient">{client.user}</div>
            <div className="companyClient">{client.company}</div>
          </ListContainer>
        )
      })}
    </ClientsContainer>
  )
}

export default ListClients
