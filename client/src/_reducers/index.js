// WTF. WHY IS INDEX.JS IN THE REDUCERS? WE ALREADY HAVE ONE IN SRC.
import { combineReducers } from "redux"; // never had to use this redux func. 
import albumReducer from "./albumReducer";

// not sure what this is for? other than a place to implement our reducers (handle requests from album.js). 
const rootReducer = combineReducers({
  album: albumReducer,  
});

export default rootReducer;
// EVERYTHING GOOD HERE.