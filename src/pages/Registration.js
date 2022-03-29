import React, { useState }from "react";
const axios = require('axios');

function Registration(){
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');    
    
    const validateReg = async () => {
        if(email !== '' && password !== '' && passwordMatch !== ''){
            if(password === passwordMatch){
                if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password)){
                    console.log(email);
                    const result = await axios.get('http://localhost:3001/validateEmail', {params : email})
                    if(result.data){
                        console.log('vše v pořádku');
                    }else{
                        console.log('email je používan')
                    }
                }else{
                    console.log('heslo nesplňuje zadaná kritéria')
                }
            }else{
                console.log('hesla se neschodují')
            }
        }else{
            console.log('nejsou vyplněny všechny údaje');
        }
    }

    const handleReg = async () => {
        const accountParam = {
            id: Date.now(),
            email: email,
            password: password,
            passwordMatch: passwordMatch
        }
        if(validateReg()){
            //const result = await axios.post('http://localhost:3001/reg', {data: accountParam})
            //console.log(result);
        }else{
            console.log("noob");
        }
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
              placeholder="Zadejte přihlašovací email"
              name="email"
              onChange={(e) =>{setEmail(e.target.value)}}
            />
          </div>
            
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
                <div className="tooltip">
                    Heslo
                    <ul className="tooltiptext">
                        <li>Musí mít více než 6 znaků</li>
                        <li>Musí obsahovat alespoň jedno velké písmeno</li>
                        <li>Musí obsahovat alespoň jedno malé písmeno</li>
                        <li>Musí obsahovat alespoň jednu číslovku</li>
                    </ul>
                </div>
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Zadejte přihlašovací heslo"
              name="password"
              onChange={(e) =>{setPassword(e.target.value)}}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="passwordCheck">
              Heslo znovu
            </label>
            <input
              type="password"
              id="passwordCheck"
              className="formFieldInput"
              placeholder="Znovu zadejte přihlašovací heslo"
              name="password"
              onChange={(e) =>{setPasswordMatch(e.target.value)}}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton" onClick={() => handleReg()}>Zaregistrovat se</button>
          </div>
        </form>
      </div>
    );
}

export default Registration;