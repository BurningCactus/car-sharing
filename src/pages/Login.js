import React, { useState }from "react";
const axios = require('axios');
const bcrypt = require('bcryptjs');

function Login(){
	  const [email, setEmail] = useState('');
	  const [password, setPassword] = useState('');   
    
    const handleLogin = () =>{
      validateLog().then(res =>{
        if(res){
          //lognout 
        }else{
          console.log("Přihlášení nebylo úspěšné");
        }
      });
    }

    const validateLog = async () =>{
        if(email !== '' && password !== ''){
          //jestli email je v databázi 
          const result = await axios.get('http://localhost:3001/validateEmail', {params : email});
          const exists = !result.data.exists;
          const hashedPassword = result.data.res.password;
          if(exists){
              console.log(password, hashedPassword);
             if(bcrypt.compareSync(password, hashedPassword)){
               console.log("budete zaregistrováni");  
               return(true);
             }else{
               console.log("heslo není správné");
             }
          }else{
            console.log('email není zaregistrován')
          }
        }else{
          console.log("nejsou vyplněny všechny údaje");
        }
        return(false);
    }

    return(
        <div className="formCenter">
        <form className="formFields" onSubmit={(evt) => evt.preventDefault()}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail 
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Zadejte email"
              name="email"
              onChange={(e) =>{setEmail(e.target.value)}}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Heslo
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Zadejte heslo"
              name="password"
              onChange={(e) =>{setPassword(e.target.value)}}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton" onClick={() => handleLogin()}>Přihlásit se</button>
          </div>
        </form>
      </div>
    );
}

export default Login;