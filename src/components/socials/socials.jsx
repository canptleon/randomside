import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';

const Socials = ({ color }) => {

  return (
      
        <div className='flex space-x-3'>
            <BsFacebook style={{color: color}}/>
            <BsTwitter style={{color: color}}/>
            <BsInstagram style={{color: color}}/>
            <BsYoutube style={{color: color}}/>
        </div>
    
  );
}

export default Socials