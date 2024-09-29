import React from 'react';
import '../styles/Photos.css';

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', alt: 'Mountain Scenery 1' },
  { id: 2, src: 'https://images.unsplash.com/photo-1517814531514-7e9d8d62b31f', alt: 'City Scenery 2' },
  { id: 3, src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', alt: 'Mountain Scenery 3' },
  { id: 4, src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7', alt: 'City Scenery 4' },
  { id: 5, src: 'https://images.unsplash.com/photo-1513810383960-47d1c26db51b', alt: 'Tokyo City 5' },
  { id: 6, src: 'https://images.unsplash.com/photo-1533752515712-6818a8da3ba4', alt: 'Mountain and River 6' },
  { id: 7, src: 'https://images.unsplash.com/photo-1531266758181-8d7b54279c04', alt: 'Tokyo Skyline 7' },
  { id: 8, src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e', alt: 'Mountain Valley 8' },
  { id: 9, src: 'https://images.unsplash.com/photo-1572276596232-e1d4a03bdf93', alt: 'City Night Scenery 9' },
  { id: 10, src: 'https://images.unsplash.com/photo-1547489432-ecc523eac6e4', alt: 'Tokyo Tower 10' },
  { id: 11, src: 'https://images.unsplash.com/photo-1559086623-7426b33e1e3d', alt: 'Mountain Sunset 11' },
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
