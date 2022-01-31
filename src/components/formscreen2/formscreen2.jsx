import React, { useState } from 'react';

const Formscreen2= ({SetForm2, SetFormInfo, deneme}) => {

    const [genInfo, setGenInfo] = useState("");

    const handleSubmit = () =>{

        if(genInfo)
        {
            SetForm2(1);
            SetFormInfo({
                genInfo: genInfo
            });

            //console.log(deneme)
        }
        else
        {
            alert("Lütfen bilgilerinizi girdiğinizden emin olunuz.");
        }
    }

    

  return (
    <div className="form2">
        <div className="max-w-3xl mx-auto pt-12 pb-48 space-y-6">
            <div className="form2header">
                <h1 style={{color:"#000000"}}>Adım 2</h1>
            </div>
            <div className="about">
                <h3 className="pb-3">Bize biraz kendinden bahseder misin?</h3>
                <textarea className="w-full max-h-fit" type="text" placeholder="Birkaç cümle yeterli" onChange={(e) => setGenInfo(e.target.value)}/>
            </div>
            <div>
                <button className="btnsend w-full" onClick={() => handleSubmit()}>Gönder</button>
            </div>
        </div>
    </div>
  );
}

export default Formscreen2;