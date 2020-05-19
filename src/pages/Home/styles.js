import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eee;
`
export const SectionListClients = styled.section`
  display: ${props => props.display.displayListClients};
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 30%; 
    display: flex;
  }
`

export const SectionMain = styled.section`
  width: 100%; 
  display: ${props => props.display.displayTabMenu};

  @media (min-width: 768px) {
     display: block;
     width: 70%;
  }
`

