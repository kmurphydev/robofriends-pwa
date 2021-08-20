import * as actions from "./actions";

import * as types from "./constants";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

import { apiCall } from "./api/api";

jest.mock("./api/api");

apiCall.mockImplementation((link) => {
    console.log('mock apicall being called')
  return new Promise((resolve, reject) => {
    resolve(({
      id: 1,
      name: "bobo",
      email: "bobo@bobo.com",
    }));
  });
  // Promise.resolve(JSON.stringify({
  //     id: 1,
  //     name: "bobo",
  //     email: "bobo@bobo.com",
  //   }))
});

const mockStore = configureMockStore([thunkMiddleware]);

describe("setSearchField", () => {
  it("should create an action to search robots", () => {
    const text = "";
    const expectedAction = { type: types.CHANGE_SEARCHFIELD, payload: text };

    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe("requestRobots", () => {
  it("handles requesting robots API", async () => {
    const expectedActions = [
      { type: types.REQUEST_ROBOTS_PENDING },
      {
        type: types.REQUEST_ROBOTS_SUCCESS,
        payload: {
          id: 1,
          name: "bobo",
          email: "bobo@bobo.com",
        },
      },
    ];

    const store = mockStore();
    await store.dispatch(actions.requestRobots());
    // console.log(store.getActions());
    // console.log(expectedActions);
    expect(store.getActions()).toEqual(expectedActions);
    // expect(store.getActions()[0]).toEqual(expectedActions[0]);
    // expect(store.getActions()[1]).toEqual(expectedActions[1]);
  });
});
