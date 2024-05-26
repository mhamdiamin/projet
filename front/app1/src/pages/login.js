import React from 'react';
import { Link } from "react-router-dom";
const Login =()=> {
    return(
    <div className="App">
    <form>
      <label>Login</label>
      <input type="text" /> <br/>
        <label> mot de passe </label>
        <input type="password" /> <br/>
        <button>connection</button>
        <span>vous n'avez pas encore de compte<Link  to="/inscrption">inscrivez-vous</Link></span>
    </form>
    </div>
    );
}
export default Login;