/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { Formscreen1, Formscreen2, Formscreen3 } from '../../components';

const Form = () => {

  const [form1, setForm1] = useState(0);
  const [form2, setForm2] = useState(0);
  const [formInfo, setFormInfo] = useState({
    name:"",
    email:"",
    phone:"",
    instagram:"",
    country:"",
    herbUse:"",
    herbUser:"",
    body:"",
    genInfo:""
  });

  return(
    <div>
      {form1 == 1 && form2 == 1 ? (<Formscreen3/>)
      :
      form1 != 1 ? (<Formscreen1 SetForm1={setForm1} SetFormInfo={setFormInfo}/>) : (<Formscreen2 SetForm2={setForm2} SetFormInfo={setFormInfo} deneme={formInfo}/>)
    }
    </div>
  )
};

export default Form;