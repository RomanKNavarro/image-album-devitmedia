// now I understand the point of the ./type.js file
import * as ACTION_TYPES from "../_actions/types";

// this is the INITIAL state. No shit gets mutated here by the reducer. 
const initialState = {    
  albumList: [],
};

/* now this is crazy. In TM's, all our reducers are defined in the "authSlice" or "entrySlice"
in their respective files. TM just makes shit complicated for no fucking reason. Switch isn't used 
there. HOWEVER: the functionality is the same. This reducer simply handles all the different cases (reqs) 
EASY. */
const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALBUMS:
      return {
        albumList: [...action.payload.result],    
        // not sure how "action.payload.result" works though. I GET IT: see album.js
      };
    case ACTION_TYPES.FETCH_ALBUM_DETAIL:
      return {
        albumDetail: action.payload.result, 
        // our payload property for the fetch async is "payload: req,". I guess "result" comes from req.   
      };
    case ACTION_TYPES.ADD_ALBUM:
      return {
        ...state,
        addedAlbum: action.payload,
      };
    case ACTION_TYPES.UPLOAD_IMAGE:
      return {
        albumDetail: action.payload.result,
      };
    case ACTION_TYPES.REMOVE_IMAGE:
      return {
        albumDetail: action.payload.result,
      };
    default:
      return state;
  }
};
export default albumReducer;