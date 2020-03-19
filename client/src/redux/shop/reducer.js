import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from './action-types';

const initialState = {
  collections: null,
  fetching: false,
  errorMessage: ''
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_COLLECTIONS_SUCCESS: 
      return {
        ...state,
        fetching: false,
        collections: action.collectionsMap
      };
    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        fetching: false,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
};

export default shopReducer;