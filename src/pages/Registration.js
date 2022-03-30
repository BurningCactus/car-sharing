import React, { useState }from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
const axios = require('axios');
const bcrypt = require('bcryptjs');

function Registration(){
    const [email, setEmail] = useState('');
	  const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');    
    
    const validateReg = async () => {
        if(email !== '' && password !== '' && passwordMatch !== ''){
            if(password === passwordMatch){
                if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password)){
                    const result = await axios.get('http://localhost:3001/validateEmail', {params : email})
                    if(result.data.exists){
                        return(true);
                    }else{
                        console.log('email je používan');
                    }
                }else{
                    console.log('heslo nesplňuje zadaná kritéria');
                }
            }else{
                console.log('hesla se neschodují');
            }
        }else{
            console.log('nejsou vyplněny všechny údaje');
        }
        return(false);
    }

    const handleReg = async () => {
        validateReg().then(res =>{
          if(res){
            const accountParam = {
              email: email,
              password: bcrypt.hashSync(password, 10)
            };
            axios.post('http://localhost:3001/reg', {data: accountParam})
            .then(result =>{
              console.log(result);
            });

          }else{
            console.log("registrace proběhla neúspěšně")
          }
        });
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
            Heslo
            </label>
            <div className="tooltip">
                <FontAwesomeIcon icon={faInfo}/>
                <ul className="tooltiptext">
                    <li>Musí mít více než 6 znaků</li>
                    <li>Musí obsahovat alespoň jedno velké písmeno</li>
                    <li>Musí obsahovat alespoň jedno malé písmeno</li>
                    <li>Musí obsahovat alespoň jednu číslovku</li>
                </ul>
            </div>
            
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