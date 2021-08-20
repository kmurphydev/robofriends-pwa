import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import * as actions from "./actions";

import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initialStateSearch = {
    searchField: "",
  };

  it("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it("should handle CHANGE_SEARCHFIELD event", () => {
    expect(
      reducers.searchRobots(initialStateSearch, actions.setSearchField("abc"))
    ).toEqual({
      searchField: "abc",
    });
  });
});

describe('requestRobots',()=>{
    const initialStateRobots = {
        robots: [],
        isPending: false
    }

    it("should return the initial state", () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
      });

      it('should handle REQUEST_ROBOTS_PENDING action',()=>{
          expect(reducers.requestRobots(initialStateRobots,{
              type: REQUEST_ROBOTS_PENDING
          })).toEqual({
              robots: [],
              isPending: true
          })
      })

      const mockRobots = [{
          id: 1,
          name: 'bob',
          email: 'bob@burger.com'
      }];
      it('should handle REQUEST_ROBOTS_SUCCESS action',()=>{
        expect(reducers.requestRobots(initialStateRobots,{
            type: REQUEST_ROBOTS_SUCCESS,
            payload: mockRobots
        })).toEqual({
            robots: mockRobots,
            isPending: false
        })
    })

    it('should handle REQUEST_ROBOTS_FAILED action',()=>{
        expect(reducers.requestRobots(initialStateRobots,{
            type: REQUEST_ROBOTS_FAILED,
            payload: 'failure'
        })).toEqual({
            error: 'failure',
            robots: [],
            isPending: false
        })
    })
      
})