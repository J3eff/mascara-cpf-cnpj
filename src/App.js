import MaskedInput from "./MaskedInput";
import './App.css';
import React, { useState } from "react";

function App() {

  const [values, setValues] = useState({});
  console.log(values);

  function handleChange(event){
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }


  return (
    <div className="App">
        <MaskedInput
          mask="999.999.999-99"
          name="cpf"
          value={values.cpf}
          onChange={handleChange} 
        />
        <MaskedInput
          name="cnpj"
          mask="99.999.999/9999-99" 
          value={values.cnpj}
          onChange={handleChange} 
        />
        <button onClick={() => setValues({})}>Limpar</button>
    </div>
  );
}

export default App;
