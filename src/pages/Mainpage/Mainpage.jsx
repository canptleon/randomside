import React from 'react';
import { Navbar, Helloworld } from '../../containers';
import { Copyright } from '../../components';

const Mainpage = () => {

  return (
      <div>
        <Navbar/>
        <Helloworld/>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-end">
            <Copyright color="#3D3C3C"/>
          </div>
        </div>
      </div>
    );
}

export default Mainpage