import React, { useState, useEffect } from 'react'

import TabMenu from '../../components/TabMenu'
import ListClients from '../../components/ListClients'
import { HomeContainer, SectionListClients, SectionMain } from './styles'

function Home() {

  const [displayListClients, setDisplayListClients] = useState('flex')
  const [displayTabMenu, setDisplayTabMenu] = useState('none')

  const onChangeDisplay = () => {
    setDisplayListClients('none')
    setDisplayTabMenu('block')
  }

  return (
    <HomeContainer>
      <SectionListClients display={{ displayListClients }} onClick={() => onChangeDisplay()}>
        <ListClients />
      </SectionListClients>
      <SectionMain display={{ displayTabMenu }}>
        <TabMenu />
      </SectionMain>
    </HomeContainer>
  )
}

export default Home
