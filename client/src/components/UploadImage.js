import React, { useState, useEffect } from "react";
import {Fragment} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { uploadImages, fetchAlbumDetail, removeImage } from "../_actions/album";

function UploadImage(props) {
  const dispatch = useDispatch();
  // vvv this shit looks deprecated. 
  const albumId = props.match.params.id;
  // where is this albumDetail defined? albumReducer.js
  const albumDetail = useSelector((state) => state.album.albumDetail);

  // we use useEffect in all of our components (except addAlbum for som reason). 
  useEffect(() => {
    dispatch(fetchAlbumDetail(albumId));
  }, []);

  return (
    // COPIED OVER FROM ALBUM LIST (bootstrap)
    <Fragment>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Albums</a></li> {/* <- we modify here */}
          <li class="breadcrumb-item active" aria-current="page">Upload Image</li>
        </ol>
      </nav>
      <div>Upload Image for album {albumDetail.name}</div>
    </Fragment>
  )
}
export default UploadImage