import React from 'react';

const Singlephoto = ({ PickedPhoto }) => {

  return (
    <div className="flex justify-center py-12">
      <img src={PickedPhoto} alt="ferhatcihaner"/>
    </div>
  );
};

export default Singlephoto;