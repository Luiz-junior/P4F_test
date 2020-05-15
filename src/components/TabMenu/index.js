import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import { TabMenuContainer } from './styles'

const posts = [
  {
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'uia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'uia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'uia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  }
]

function TabMenu() {

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

  return (
    <TabMenuContainer>
      <div className="tabHeader">
        <button className="tabBtn" onClick={(e) => openTab(e, 'photos')}>Fotos</button>
        <button className="tabBtn" onClick={(e) => openTab(e, 'posts')}>Posts</button>
      </div>

      <div id="photos" className="tabContent" style={{ display: displayPhotos }}>
        <section className="userSelect">
          <div className="nameClient">Luiz</div>
          <div className="userClient">luiz@gmail.com</div>
          <div className="userAddress">Alameda Itapecuru - Alphaville</div>
          <div className="companyClient">Sistema User ME</div>
        </section>

        <Carousel>
          <div>
            <img src="https://via.placeholder.com/600/771796" />
          </div>
          <div>
            <img src="https://via.placeholder.com/600/92c952" />
          </div>
          <div>
            <img src="https://via.placeholder.com/600/d32776" />
          </div>
          <div>
            <img src="https://via.placeholder.com/600/771796" />
          </div>
        </Carousel>
      </div>

      <div id="posts" className="tabContent" style={{ display: displayPosts }}>
        <section className="userSelect">
          <div className="nameClient">Luiz</div>
          <div className="userClient">luiz@gmail.com</div>
          <div className="userAddress">Alameda Itapecuru - Alphaville</div>
          <div className="companyClient">Sistema User ME</div>
        </section>

        {posts.map((post, index) => {
          return (
            <div key={index} className="postContainer">
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </div>
          )
        })}
      </div>
    </TabMenuContainer>
  )
}

export default TabMenu
