/* eslint-disable no-undef */
/* import configureMockStore from "redux-mock-store"; */
/* import fetchMock from "fetch-mock"; */
/* import thunk from 'redux-thunk' */
import * as actions from "./clientsAction";
import * as types from "./types";

// const middlewares = [thunk];
/* const mockStore = configureMockStore(middlewares); */

describe('actions', () => {
  it('should create action setClientSelected', () => {
    const idClientSelect = 1

    const expectedAction = {
      type: types.ID_CLIENT_SELECTED,
      idClientSelect
    }
    expect(actions.idClientSelected(idClientSelect)).toEqual(expectedAction)
  })

  it('should create action idClientSelected ', () => {
    const expectedAction = {
      type: types.SET_CLIENT_SELECTED,
      clientSelected
    }
    expect(actions.setClientSelected(clientSelected)).toEqual(expectedAction)
  });
})


/* let clients = [
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

const clientSelected = {
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
} */

/* describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("create action GET_CLIENTS", () => {
    fetchMock.getOnce('/users', {
      body: { clients },
      headers: { 'content-type': 'application/json' }
    })

    const expectedAction = {
      type: types.GET_CLIENTS,
      clients
    };

    const store = mockStore({ clients: [] })

    return store.dispatch(
      actions.getClients()
        .then(() => expect(store.getActions()).toEqual(expectedAction))
    )
  });
}); */
