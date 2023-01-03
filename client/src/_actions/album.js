// here we use axios to call the api

import axios from "axios";
import {
  FETCH_ALBUMS,
  FETCH_ALBUM_DETAIL,
  ADD_ALBUM,
  UPLOAD_IMAGE,
  REMOVE_IMAGE,
} from "./types";

/* what's this? an async func (no async!) to send an http request (get) to the /albums endpoint :) 
Very similar to TM's entryService.js's asnyc axios funcs. This request has the properties "type" 
and "payload". I UNDERSTAND: these requests and their data are handled in albumReducer. */
export const fetchAlbums = () => {
  const req = axios.get("/albums").then((res) => res.data);
  // axios.get("/albums") is an endpoint to get the albums
  return {
    type: FETCH_ALBUMS,    
    payload: req,
  };
};