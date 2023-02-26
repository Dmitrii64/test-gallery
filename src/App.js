import React, {useState} from 'react';
import './styles/globals.scss'
import {images} from "./data/images";
import GalleryList from "./components/GalleryList/GalleryList";
import NewImageForm from "./components/NewImageForm/NewImageForm";
import PopUp from "./components/UI/PopUp/PopUp";

function App() {
  const [photos, setPhotos] = useState(images);
  const [popUp, setPopUp] = useState(false);
  const [imageURL, setImageURL] = useState('');

  const createImage = (newImage) => {
    setPhotos([newImage, ...photos]);
  };

  const showImage = (image) => {
    setPopUp(true);
    setImageURL(image);
    document.documentElement.classList.add('no-scroll');
  }

  return (
      <div className='Container'>
        <NewImageForm createImage={createImage}/>
        <GalleryList photos={photos} showImage={showImage} />
        {popUp && <PopUp setVisible={setPopUp} imageURL={imageURL}/>}
      </div>
  );
}

export default App;
