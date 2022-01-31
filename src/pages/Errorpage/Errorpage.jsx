import React from 'react';
import { Navbar, Header, Footer } from '../../containers';


const Startjourney = () => {

  return (
    <div>
      <div> 
        <Navbar/>
        <Header title="Dikkat!"/>
        <div className="form3">
            <div className="max-w-3xl mx-auto pt-52 pb-80">
                <h2 className="flex justify-center">Sayfa çalışması sürüyor.</h2>
            </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Startjourney