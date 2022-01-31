import React from 'react';
import './photo.css'

const Photo = ({ photo, loading, SetPickedPhoto }) => {
  if (loading) {
    return <h2>Yükleniyor...</h2>;
  }

  return (
    <>
      {photo.map(item => (
        <img className="photos" src={item.url} alt="ferhatcihaner" onClick={() => SetPickedPhoto(item.url)}/>
      ))}
    </>
  );
};

export default Photo;