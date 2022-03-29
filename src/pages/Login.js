import React, { useEffect, useState }from "react";

function Login(){
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');   
    
    const handleLogin = () =>{
        console.log(email , password)
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
            <button className="formFieldButton" onClick={handleLogin()}>Přihlásit se</button>
          </div>
        </form>
      </div>
    );
}

export default Login;