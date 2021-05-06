import React,{ useState } from 'react';
import './App.css';
import ImageGrid from './Components/ImageGrid';
import Modal from './Components/Modal';
import UploadImage from './Components/UploadImage';
import {Switch,Route} from "react-router-dom";
import DetailComponent from './Components/DetailComponent';
import UpdateComponent from './Components/UpdateComponent'; 

function App() {

  const [selectedImg,setSelectedImg]=useState(null);
  const [addImg,setAddImg]=useState(false);
  const [getReq,setGetReq]=useState(0);

  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
            <div className="title">
              <h1>ImageS3</h1>
              <h2>Image Gallery</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
            </div>
            {!addImg && <button className="label" onClick={()=>setAddImg(!addImg)}>+<span>+</span></button>}
            {addImg && <UploadImage setAddImg={setAddImg} setGetReq={setGetReq} getReq={getReq}/>}
            <ImageGrid setSelectedImg={setSelectedImg} getReq={getReq}/>
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
        </div>
      </Route>
      <Route path="/item">
            <DetailComponent item={selectedImg} setSelectedImg={setSelectedImg} />
      </Route>
      <Route path="/update">
        <UpdateComponent item={selectedImg}/>
      </Route>
        
    </Switch>
   
  );
}

export default App;
