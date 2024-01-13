import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import './style.css'; // CSS file for styling

const ImageGrid = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const showNextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const showPrevImage = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    };
  if (!images || images.length === 0) {
    // Handle the case when 'images' is undefined or empty
    return <p>No images to display.</p>;
  }
  return (
    <div className='container'>
    <div className="image-grid-container">
      <button onClick={showPrevImage}>Left</button>
  
        <img
          className="image"
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
        />
        <div className='image-counting-container'>{currentIndex + 1}/{images.length}</div>
  
      <button onClick={showNextImage} >Right</button>
    </div>
  </div>
  );
};

export default ImageGrid;
