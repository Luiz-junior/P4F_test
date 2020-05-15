import React from 'react'

import TabMenu from '../../components/TabMenu'
import ListClients from '../../components/ListClients'
import { PhotosContainer, SectionListClients, SectionMain } from './styles'

function Photos() {
  return (
    <PhotosContainer>
      <SectionListClients>
        <ListClients />
      </SectionListClients>
      <SectionMain>
        <TabMenu />
      </SectionMain>
    </PhotosContainer>
  )
}

export default Photos
