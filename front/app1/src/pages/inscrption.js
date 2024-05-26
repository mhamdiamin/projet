import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from axios;
const Inscrption =()=> {
const[username,setusername]=useState('');
const[password,setpassword]=useState('');
const[email,setemail]=useState('');
const valider=async ()=>{
  const resultat=await axios.post('localhost:80/connexion.php',{username,password,email});
}

    return(
    <div className="App">
    <form>
      <label>username</label>
      <input name="nom" onChange={(e)=>setusername(e.target.value)} type="text" /> 
        <label>password</label>
        <input name="pass" onChange={(e)=>setpassword(e.target.value)} type="text" />
        <label>email </label>
        <input name="mail" onChange={(e)=>setemail(e.target.value)} type="text" />
        <button >inscrption</button>
        <span>vous avez déja un compte<Link  to="/login">s'authentifier</Link></span>
    </form>
    </div>
    );
}
export default Inscrption;
