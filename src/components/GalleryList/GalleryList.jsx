import React from 'react';
import styles from './GalleryList.module.scss'
import GalleryItem from "../GalleryItem/GalleryItem";

const GalleryList = ({photos, showImage}) => {
  return (
      <ul className={styles.PhotosList}>
        {photos.map(photo => (
            <GalleryItem key={photo.id} photo={photo} showImage={showImage}/>
        ))}
      </ul>
  );
};

export default GalleryList;