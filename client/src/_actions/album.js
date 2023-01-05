// here we use axios to call the api. THESE ARE OUR "ACTIONS"

/* in which components these actions are used varies. fetch is used in AlbumList.js, addAlbum used 
in AddAlbum.js, and fetchDetail, uploadImages, and removeImage used in UploadImage */
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

// we pass this only the album id. THESE ENDPOINTS (THE URLS) WE DEFINE HERE.
// SO WTF IS THE ALBUM DETAIL?
export const fetchAlbumDetail = (id) => {
  const req = axios.get(`/albums/${id}`).then((res) => res.data);
  console.log("~~~~~albumdetail: ", req);
  return {
    type: FETCH_ALBUM_DETAIL,
    payload: req,
  };
};

/* why do we need to pass data here and not in fetchAlbums? data is the "body" (??)
  JUDGEMENT: data used in the post request, which requires the data to upload new album. See 
  AddAlbum.js */
export const addAlbum = (data) => {
  const req = axios.post("/albums/add", data).then((res) => res.data);
  return {
    type: ADD_ALBUM,
    payload: req,
  };
};

// This is plural b/c up to 3 images can be uploaded. We pass the album id, data (what's that again?) & config (??)
export const uploadImages = (id, data, config) => {
  const req = axios
    .put(`/albums/upload/${id}`, data, config)
    .then((res) => res.data);
  return {
    type: UPLOAD_IMAGE,
    payload: req,
  };
};

// we pass album id and the image name as args. Why don't we pass config here too?
export const removeImage = (id, imageName) => {
  const req = axios
    // REMEMBER: fileName is part of req.body on postman. 
    .put(`/albums/removeImage/${id}`, { fileName: imageName })
    .then((res) => res.data);
  // REMEMBER: these are the response's prop.s
  return {
    // REMEMBER: "type" for use in the cases in albumReducers
    type: REMOVE_IMAGE,
    payload: req,
  };
};