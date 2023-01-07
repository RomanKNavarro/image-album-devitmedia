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
          <li class="breadcrumb-item active" aria-current="page">
            Upload Image
          </li>
        </ol>
      </nav>

      {/* THIS STUFF PASTED */}
      <div className="row m-1">
        {/* CRAZY: WITHOUT ADDING THE "albumDetail.images &&" FIRST, WE GET ERROR:
        TypeError: albumDetail.images is undefined. HOW?? */}
        {albumDetail.images &&
          albumDetail.images.map((image, index) => (
            <div className="card col-md-3 mb-2">
              <div className="card-header bg-white">
                <span>{image}</span>
                <button
                  type="button"
                  className="btn btn-danger float-end"
                  onClick={() => handleDelete(albumId, image)}
                >
                  <i class="fas fa-backspace"></i>
                </button>
              </div>
              <div className="card-body p-1">
                <img
                  style={{ width: "100%", maxHeight: "180px" }}
                  class="img-thumbnail"
                  src={`http://localhost:5000/${image}`}    
                  // HERE IS HOW WE GET THE IMAGE IN ORDER TO PASTE IT. 
                />
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  )
}
export default UploadImage