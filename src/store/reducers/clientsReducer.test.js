/* eslint-disable no-undef */
import reducer from './clientsReducer'
import * as types from '../actions/types'

let clients = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
]

let photosClient = [
  {
    "albumId": 3,
    "id": 101,
    "title": "incidunt alias vel enim",
    "url": "https://via.placeholder.com/600/e743b",
    "thumbnailUrl": "https://via.placeholder.com/150/e743b"
  },
  {
    "albumId": 3,
    "id": 102,
    "title": "eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt",
    "url": "https://via.placeholder.com/600/a393af",
    "thumbnailUrl": "https://via.placeholder.com/150/a393af"
  },
  {
    "albumId": 3,
    "id": 103,
    "title": "et eius nisi in ut reprehenderit labore eum",
    "url": "https://via.placeholder.com/600/35cedf",
    "thumbnailUrl": "https://via.placeholder.com/150/35cedf"
  }
]

let clientSelected = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
}

let postsClient = [
  {
    "userId": 3,
    "id": 21,
    "title": "asperiores ea ipsam voluptatibus modi minima quia sint",
    "body": "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt",
  },
  {
    "userId": 3,
    "id": 22,
    "title": "dolor sint quo a velit explicabo quia nam",
    "body": "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
  },
  {
    "userId": 3,
    "id": 23,
    "title": "maxime id vitae nihil numquam",
    "body": "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
  }
]

describe('Clients reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        clients: [],
        photosClient: [],
        postsClient: [],
        idClientSelect: 0,
        clientSelected: {},
        loading: true,
        error: ''
      }
    )
  });

  it('should handle GET_CLIENTS', () => {
    expect(
      reducer([], {
        type: types.GET_CLIENTS,
        clients,
      })
    ).toEqual(
      {
        clients,
      }
    )
  });

  it('should handle GET_PHOTOS_CLIENT', () => {
    expect(
      reducer([], {
        type: types.GET_PHOTOS_CLIENT,
        photosClient,
      })
    ).toEqual(
      {
        photosClient,
      }
    )
  });

  it('should handle ID_CLIENT_SELECTED', () => {
    expect(
      reducer([], {
        type: types.ID_CLIENT_SELECTED,
        idClientSelect: 2,
      })
    ).toEqual(
      {
        idClientSelect: 2,
      }
    )
  });

  it('should handle SET_CLIENT_SELECTED', () => {
    expect(
      reducer([], {
        type: types.SET_CLIENT_SELECTED,
        clientSelected,
      })
    ).toEqual(
      {
        clientSelected,
      }
    )
  });

  it('should handle GET_POSTS_CLIENT', () => {
    expect(
      reducer([], {
        type: types.GET_POSTS_CLIENT,
        postsClient,
      })
    ).toEqual(
      {
        postsClient,
      }
    )
  });

});