import { useState,useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Loginpage(){
  const [user, setUser] = useState({
    userName: '',
    password:'',
  });
  
  const navigate = useNavigate();
  function handleChange(parameter, value){
    console.log('parameter ', value);
    setUser({...user, [parameter]:value});
  };
  function handleSignup(){
    navigate('/register')
  }
  async function handleSubmit(e){
    e.preventDefault();
    console.log(user)
    try {
      await axios.post("http://localhost:8000/api/login",user)
      alert("Login Successful")
      navigate('/homepage')
    } catch (error) {
      console.log("Axios error ",error)
    }
    console.log("SUBMIT");
  }
  return(
    <div className="bg-slate-400 flex justify-center">
      <div className=" bg-rose-400 p-4">
        <div className="text-center">Login Page</div>
        <form action="" onSubmit={handleSubmit} className="flex flex-col p-10">
          <input type="text" name="userName" id="UserName" placeholder="UserName" onChange={(e)=>handleChange('userName',e.target.value)} className="border-2 border-gray rounded-md text-black px-3 "/>
          <input type="text" name="password" id="Password" placeholder="Password"  onChange={(e)=>handleChange('password',e.target.value)} className="border-2 border-gray rounded-md text-black px-3 my-2"/>
          <button type="submit" className="bg-white rounded-md font-semibold">Login</button>
        </form>
        <div>
          <div>Not a member</div>
          <button onClick={handleSignup}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Loginpage;