import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'   
// ^???: <BrowserRouter> allows us to easily connect routes to comp.s
import { ToastContainer } from "react-toastify";
import AlbumList from "./components/AlbumList";
import AddAlbum from "./components/AddAlbum";
import UploadImage from "./components/UploadImage";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="container">
        {/* super easy way to connect our routes w/ our components. We can easily see them in the browser
        through (example): http://localhost:3000/add */}
        <Routes>
          <Route path='/' element={<AlbumList/>} /> 
          <Route path='/add' element={<AddAlbum/>} /> 
          <Route path='/upload/:id' element={<UploadImage/>} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
