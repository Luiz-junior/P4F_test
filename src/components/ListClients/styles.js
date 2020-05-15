import styled from 'styled-components'

export const ClientsContainer = styled.div`
  background: #fff;
  width: 75%;
  margin-top: 15px;
  padding: 30px;
`
export const ListContainer = styled.div`
  background: #eee;
  margin-bottom: 15px;
  padding: 15px;
  transition: ease-in-out .3s;
  border-radius: 5px;

  &:active {
    background: #fff;
  }

  .nameClient, .userClient, .companyClient {
    padding-bottom: 10px;
    font-weight: 300;
  }
`
