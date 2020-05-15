import styled from 'styled-components'

export const TabMenuContainer = styled.div`
  background: #fff;
  /* height: 50px; */
  margin-top: 15px;
  width: 88%;
  padding: 0px 50px;
  overflow: hidden;

  .tabHeader {
    border-bottom: 1px solid #eee;
  }

  .tabBtn {
    background: transparent;
    height: 50px;
    margin-right: 20px;
    border: none;
    outline: none;
    transition: ease-in .3s;
    font-weight: 300;
    padding: 5px 10px;

    &:active {
      background: #01579b;
      color: #fff;
    }
  }
  
  .tabContent {
    display: none;
    padding-left: 5px;
    background: transparent;

    .userSelect {
      padding: 10px 0px 10px;

      .nameClient, .userClient, .userAddress, .companyClient {
        font-weight: 300;
        padding: 5px 0px;
      }
    }

    .slider .slide {
      height: 350px;
    }

    .carousel {
      border-radius: 5px;

      .thumbs-wrapper {
        margin: 0;
      }

      .thumbs {
        padding: 0px;
        padding-left: 5px;

        .thumb {  
          height: 120px;
          width: 200px !important;
        }
      }
    }

    .postContainer {
      border: 1px solid #ddd;
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 5px;
    }
  }
`