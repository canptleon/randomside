import React, { useState } from "react";
import { Navbar, Header, Photos, Footer } from '../../containers';
import { Singlephoto } from '../../components';

const Photoalbum = () => {

  const [pickedPhoto, setPickedPhoto] = useState(-1);

  return (
    <div>
        <Navbar/>
        <Header title="Fotoğraflar"/>
        {pickedPhoto === -1 ? (<Photos SetPickedPhoto={setPickedPhoto}/>):(<Singlephoto PickedPhoto={pickedPhoto} />)}
        <Footer/>
    </div>
  );
}

export default Photoalbum;