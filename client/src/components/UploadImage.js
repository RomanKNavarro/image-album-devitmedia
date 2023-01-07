// import React, { useState, useEffect } from "react";
// import Dropzone from "react-dropzone";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { uploadImages, fetchAlbumDetail, removeImage } from "../_actions/album";

// // FOR REPLACING props.match.params: 
// import { Routes, Route, useParams } from 'react-router-dom';

// function UploadImage(props) {
//   const dispatch = useDispatch();
//   // vvv this shit looks deprecated. What's it supposed to do?
//   //const albumId = props.match.params.id;
//   let { albumId } = useParams();
  
//   // where is this albumDetail defined? albumReducer.js
//   const albumDetail = useSelector((state) => state.album.albumDetail);
  

//   // we use useEffect in all of our components (except addAlbum for som reason). 
//   useEffect(() => {
//     dispatch(fetchAlbumDetail(albumId));
//   }, []);

//   // TODO: EXPLAIN THIS SHIT LATER
//   const onDrop = (files) => {
//     let formData = new FormData();
//     const config = {
//       header: { "content-type": "multipart/form-data" },
//     };
//     files.map((file, index) => {
//       formData.append("image", file);
//     });

//     dispatch(uploadImages(albumId, formData, config)).then((res) => {
//       if (res.payload.status) {
//         toast.success(res.payload.message);
//       }
//     });
//   };

//   return (
//     // COPIED OVER FROM ALBUM LIST (bootstrap)
//     <div>
//       {/* lol what's breadcrumb again? */}
//       <nav aria-label="breadcrumb">
//         <ol class="breadcrumb">
//           <li class="breadcrumb-item"><a href="/">Albums</a></li> {/* <- we modify here */}
//           <li class="breadcrumb-item active" aria-current="page">
//             Upload Image
//           </li>
//         </ol>
//       </nav>

//       {/* EVERYTHING PASTED. THIS STUFF PASTED. Show all the images in each album */}
//       <div className="card shadow-sm">
//         <div className="card-header">
//           <h5>Upload Image for Album {albumDetail.name}</h5>
//         </div>
//         <div className="card-body">
//           <Dropzone onDrop={onDrop}>
//             {({ getRootProps, getInputProps }) => (
//               <div
//                 className="m-1"
//                 style={{
//                   width: "350px",
//                   height: "240px",
//                   border: "1px solid lightgray",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//                 {...getRootProps()}
//               >
//                 <input {...getInputProps()} />
//                 <p>Drag and drop files here or click to upload</p>
//               </div>
//             )}
//           </Dropzone>  
//         </div> 
//       </div>
//     </div>
//   )
// }
// export default UploadImage

import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { uploadImages, fetchAlbumDetail, removeImage } from "../_actions/album";

import { Routes, Route, useParams } from 'react-router-dom';

function UploadImage(props) {
  const dispatch = useDispatch();
  //const albumId = props.match.params.id;
  let { albumId } = useParams();
  //   const [albumInfo, setAlbumInfo] = useState({});
  const albumDetail = useSelector((state) => state.album.albumDetail);

  useEffect(() => {
    dispatch(fetchAlbumDetail(albumId));
  }, []);

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    files.map((file, index) => {
      formData.append("image", file);
    });

    dispatch(uploadImages(albumId, formData, config)).then((res) => {
      if (res.payload.status) {
        toast.success(res.payload.message);
      }
    });
  };

  const handleDelete = (albumId, imageName) => {
    dispatch(removeImage(albumId, imageName)).then((res) => {
      if (res.payload.status) {
        toast.success(res.payload.message);
      }
    });
  };
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Albums</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Upload
          </li>
        </ol>
      </nav>
      <div className="card shadow-sm">
        <div className="card-header">
          <h5>Upload Image for Album {albumDetail.name}</h5>
        </div>
      </div>
    </div>
  );
}

export default UploadImage;
