import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { useDispatch, useSelector } from 'react-redux'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import { TabMenuContainer } from './styles'
import { getPhotosClient, setClientSelected, getPostsClient } from '../../store/actions/clientsAction'

function TabMenu() {
  let dispatch = useDispatch()

  const [firstRequest, setFirstRequest] = useState(true)

  let { photosClient, idClientSelect, clients, clientSelected, postsClient } = useSelector(state => ({
    clients: state.clientsReducer.clients,
    photosClient: state.clientsReducer.photosClient,
    idClientSelect: state.clientsReducer.idClientSelect,
    clientSelected: state.clientsReducer.clientSelected,
    postsClient: state.clientsReducer.postsClient,
  }))

  useEffect(() => {
    if (firstRequest) {
      dispatch(getPhotosClient(1))
      dispatch(getPostsClient(1))
    }
    else {
      dispatch(getPhotosClient(idClientSelect))
      dispatch(getPostsClient(idClientSelect))

      let clientSelected = clients.filter(client => client.id === idClientSelect)
      dispatch(setClientSelected(...clientSelected))
    }

    setFirstRequest(false)
  }, [idClientSelect])

  const [displayPhotos, setDisplayPhotos] = useState('block')
  const [displayPosts, setDisplayPosts] = useState('none')

  const openTab = (e, tabName) => {
    if (tabName == 'photos') {
      setDisplayPosts('none')
      setDisplayPhotos('block')
    } else {
      setDisplayPhotos('none')
      setDisplayPosts('block')
    }
  }

  let { name, address } = clientSelected

  return (
    <TabMenuContainer>
      <div className="tabHeader">
        <button className="tabBtn" onClick={(e) => openTab(e, 'photos')}>Fotos</button>
        <button className="tabBtn" onClick={(e) => openTab(e, 'posts')}>Posts</button>
      </div>

      {/* TAB 1 */}
      <div id="photos" className="tabContent" style={{ display: displayPhotos }}>

        {idClientSelect == 0 && clients.length > 0 && (
          <section className="userSelect">
            <span className="nameClient">{clients[0].name}</span> <br />
            <span className="userClient">Endereço:</span> <br />
            <span className="userAddress">{clients[0].address.street} {clients[0].address.suite} </span><br />
            <span className="userAddress">{clients[0].address.city}- CEP: {clients[0].address.zipcode}</span>
          </section>
        )}

        {clientSelected.name !== undefined && (
          < section className="userSelect">
            <span className="nameClient">{name}</span> <br />
            <span className="userClient">Endereço:</span> <br />
            <span className="userAddress">{address.street} {address.suite} </span><br />
            <span className="userAddress">{address.city}- CEP: {address.zipcode}</span>
          </section>
        )}

        <Carousel className="carousel">
          <div>
            {photosClient.length > 0 && photosClient.map(post => {
              return <img key={post.id} src={post.url} />
            })}
          </div>
        </Carousel>
      </div>

      {/* TAB 2 */}
      <div id="posts" className="tabContent" style={{ display: displayPosts }}>
        {idClientSelect == 0 && clients.length > 0 && (
          <section className="userSelect">
            <span className="nameClient">{clients[0].name}</span> <br />
            <span className="userClient">Endereço:</span> <br />
            <span className="userAddress">{clients[0].address.street} {clients[0].address.suite} </span><br />
            <span className="userAddress">{clients[0].address.city}- CEP: {clients[0].address.zipcode}</span>
          </section>
        )}

        {clientSelected.name !== undefined && (
          < section className="userSelect">
            <span className="nameClient">{name}</span> <br />
            <span className="userClient">Endereço:</span> <br />
            <span className="userAddress">{address.street} {address.suite} </span><br />
            <span className="userAddress">{address.city}- CEP: {address.zipcode}</span>
          </section>
        )}

        {postsClient.length > 0 && (
          postsClient.map(post => {
            return (
              <div key={post.id} className="postContainer">
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </div>
            )
          })
        )}
      </div>
    </TabMenuContainer >
  )
}

export default TabMenu
