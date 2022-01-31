/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import './formscreen1.css'

const Formscreen1 = ({SetForm1, SetFormInfo}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [instagram, setInstagram] = useState("");
    const [country, setCountry] = useState(0);
    const [herbUse, setHerbUse] = useState(-1); 
    const [herbUser, setHerbUser] = useState(-1);
    const [body, setBody] = useState("");

    const handleSubmit = () =>{
        if(name && email && phone && instagram && country != -1 && herbUse != -1 && herbUser != -1 && body)
        {
            SetForm1(1);
            SetFormInfo({
                name: name,
                email: email,
                phone: phone,
                instagram: instagram,
                country: country,
                herbUse:herbUse,
                herbUser:herbUser,
                body: body
            });
        }
        else
        {
            alert("Lütfen tüm bilgilerinizi girdiğinizden emin olunuz.");
        }
    }

    const handleHerbUse = (val) =>{
        setHerbUse(val);
    }

    const handleHerbUser = (val) =>{
        setHerbUser(val);
    }


  return(
    <div className="form1">
        <div className="max-w-3xl mx-auto pt-12 pb-48 space-y-6">
            <div className="form1header">
                <h1>Adım 1</h1>
            </div>
            <div>
                <h3>Kişisel Bilgiler</h3>
                <div className="personal grid grid-cols-2 gap-6 pt-3">
                    <input type="text" placeholder="İsim" onChange={(e) =>  setName(e.target.value)}/>
                    <input type="email" placeholder="E-Posta Adresi" onChange={(e) =>  setEmail(e.target.value)}/>
                    <input type="number" placeholder="Telefon" onChange={(e) =>  setPhone(e.target.value)}/>
                    <input type="text" placeholder="Instagram Kullanıcı Adınız" onChange={(e) =>  setInstagram(e.target.value)}/>
                </div>
            </div>
            <div>
                <h3>Hangi Ülkede Yaşıyorsun?</h3>
                <div className="pt-3">
                    <select className="w-full" value={country} onChange={(e) =>  setCountry(e.target.value)}>
                        <option value="0">Türkiye</option>
                        <option value="1">Amerika</option>
                        <option value="2">Almanya</option>
                    </select>
                </div>
            </div>
            <div>
                <h3>Daha önce Herbalife ürün kullandın mı?</h3>
                <div className="checkboxes flex space-x-6 pt-3">
                    <div className="flex space-x-3">
                        <input className="getgreener" type="checkbox" checked={herbUse == 1 ? true: false} onChange={() => handleHerbUse(1)}/>
                        <p className="mt-1">Evet</p>
                    </div>
                    <div className="flex space-x-3">
                        <input className="getgreener" type="checkbox" checked={herbUse == 0 ? true: false} onChange={() => handleHerbUse(0)}/>
                        <p className="mt-1">Hayır</p>
                    </div>
                </div>
            </div>
            <div>
                <h3>Daha önce Herbalife üyesi oldun mu?</h3>
                <div className="checkboxes flex space-x-6 pt-3">
                    <div className="flex space-x-3">
                        <input className="getgreener" type="checkbox" checked={herbUser == 1 ? true: false} onChange={() => handleHerbUser(1)}/>
                        <p className="mt-1">Evet</p>
                    </div>
                    <div className="flex space-x-3">
                        <input className="getgreener" type="checkbox" checked={herbUser == 0 ? true: false} onChange={() => handleHerbUser(0)}/>
                        <p className="mt-1">Hayır</p>
                    </div>
                </div>
            </div>
            <div className="idealbody">
                <h3 className="pb-3">İdeal vücut ölçün nedir?</h3>
                <input className="w-full" type="text" placeholder="Ölçünüzü Yazınız" onChange={(e) =>  setBody(e.target.value)}/>
            </div>
            <div>
                <button className="btnsend w-full" onClick={() => handleSubmit()}>Gönder</button>
            </div>
        </div>
    </div>
  )
};

export default Formscreen1;