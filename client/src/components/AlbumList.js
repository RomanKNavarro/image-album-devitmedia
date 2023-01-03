import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchAlbums } from "../_actions/album";

// NEED A REFRESHER ON USEDISPATCH.
/* This hook returns a reference to the dispatch function (fetchAlbums in this case, from album.js) 
from the Redux store. You may use it to dispatch actions as needed. */
function AlbumList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);
  const albumList = useSelector((state) => state.album.albumList);
  return (
    // ALL THIS SHIT PASTED TO SAVE TIME.
    <div className="card shadow-sm">
      <div className="card-header">
        <h5>Album List</h5>
      </div>
      <div className="card-title p-4">
        <a className="btn btn-success" href="/add">
          Add Album
        </a>
      </div>
      <div className="card-body p-4">
        <table class="table border">
          <thead class="table-dark">
            <tr>
              <td>No.</td>
              <td>Album Name</td>
              <td>Description</td>
              <td>Image Count</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {/* for every album,  */}
            {albumList.map((album, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{album.name}</td>
                <td>{album.description}</td>
                <td>{album.images.length}</td>
                <td>
                  {/* i dont get this: we need to access the /upload endpoint just to get the album id?
                  This is under the "actions" tab of our table. */}
                  <a class="btn btn-info" href={`/upload/${album._id}`}>
                    <i class="fas fa-image"></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default AlbumList