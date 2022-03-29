import './App.css';
import Registration from './pages/Registration';
import Login from './pages/Login';

const LoginPage = () =>{
  return (
    <div className="App">
       <div className="appAside" />
          <div className="appForm">
            <div className="formTitle">
              <a href='/' className='formActiveLink' >Přihlásit se</a> nebo
              <a href='/reg' className='formTitleLink'>Zaregistrovat se</a>
            </div>
            <Login></Login>
          </div>
    </div>
  );
}

const RegistrationPage = () =>{
  return (
    <div className="App">
       <div className="appAside" />
          <div className="appForm">
            <div className="formTitle">
              <a href='/' className='formTitleLink'>Přihlásit se</a> nebo
              <a href='/reg' className='formActiveLink'>Zaregistrovat se</a>
            </div>
            <Registration></Registration>
          </div>
    </div>
  );
}

export {LoginPage, RegistrationPage};
