import React from 'react';
import './helloworld.css'

const Helloworld = () => {

    return (
        <div className="helloworld py-6">
            <div className="grid grid-cols-12 gap-6 max-w-6xl mx-auto flex shadow-2xl rounded-lg">
                <div className="col-span-5">
                    <img className="object-contain" src="https://picsum.photos/568/673" alt="ferhatcihaner"/>
                </div>
                <div className="texts col-span-7 space-y-3 my-auto">
                    <h1>Merhaba,<br/> Dünyama Hoş Geldin</h1>
                    <p>Herkese Selam</p>
                    <b>Ben Ferhat Cihaner,</b>
                    <p>Sporu çok seviyorum ve bir Triathletim! İnsanların da daha sağlıklı ve aktif bir yaşam biçimi benimsemeleri için elimden gelen her şeyi yapmaya hazırım.</p>
                    <p> Sağlıklı ve daha iyi bir dünya için benim seçtiğim yol bu! Mutlu, huzurlu ve kendini seven bireyler dünyayı daha güzel bir yere çevirir. En büyük motivasyonum da bu amaç doğrultusunda sizinle birlikte hareket edebilmek. Web sitemi gezerken umarım istediklerini karşılarım! Benimle gel ve motive ol!</p>
                    <p>Benimle gel ve motive ol!</p>
                </div>
            </div>
        </div>
      );
}

export default Helloworld