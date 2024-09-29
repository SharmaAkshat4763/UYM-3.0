import React from 'react';
import '../styles/Photos.css';

const photos = [
  { id: 1, src: '\photo1.jpg', alt: 'Photo 1' },
  { id: 2, src: '\photo2.jpg', alt: 'Photo 2' },
  { id: 3, src: '\photo3.jpg', alt: 'Photo 3' },
  { id: 4, src: '\photo4.jpg', alt: 'Photo 4' },
  { id: 5, src: '\photo2.jpg', alt: 'Photo 5' },
  { id: 6, src: '\photo4.jpg', alt: 'Photo 6' },
  { id: 7, src: '\photo1.jpg', alt: 'Photo 7' },
  { id: 8, src: '\photo3.jpg', alt: 'Photo 8' },
  { id: 9, src: '\photo4.jpg', alt: 'Photo 9' },
  { id: 10, src: '\photo2.jpg', alt: 'Photo 10' },
  { id: 11, src: '\photo1.jpg', alt: 'Photo 11' },
 
];

const Photos = () => {
  return (
    <div className="gallery">
      {photos.map(photo => (
        <div key={photo.id} className="photo">
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

export default Photos;

