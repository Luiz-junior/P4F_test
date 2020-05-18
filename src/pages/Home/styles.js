import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SectionListClients = styled.section`
  display: ${props => props.display.displayListClients};
  justify-content: center;
  background: #eee;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    width: 30%; 
    display: flex;
  }
`

export const SectionMain = styled.section`
  background: #eee; 
  width: 100%; 
  height: 100%;
  display: ${props => props.display.displayTabMenu};

  @media (min-width: 768px) {
     display: block;
     width: 70%;
  }
`

