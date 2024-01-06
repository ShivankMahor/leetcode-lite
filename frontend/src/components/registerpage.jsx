import { useState } from "react";
import axios from 'axios'
import { Link,useNavigate } from "react-router-dom";


function Registerpage(){
  const [user, setUser] = useState({
    userName: '',
    password:'',
    email: ''
  });

  const navigate = useNavigate();
  function handleChange(parameter, value){
    console.log('parameter ', value);
    setUser({...user, [parameter]:value});
  };

  async function handleSubmit(e){
    e.preventDefault();
    console.log(user)

    try {
      await axios.post("http://localhost:8000/api/register",user)
      alert("registration Successful");
      navigate('/')
    } catch (error) {
      alert("registration failed");
      console.log("Axios error ",error)
    }
    console.log("SUBMIT");
  }
  return(
    <div className="bg-slate-400 flex justify-center">
      <div className="text-xl bg-yellow-200 p-4">
        <div className="text-center font-bold my-4">Register Page</div>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input type="text" name="userName" id="UserName" placeholder="Username" onChange={(e)=>handleChange('userName',e.target.value)} className="border-2 border-gray rounded-md text-black px-3 "/>
          <input type="text" name="email" id="Email" placeholder="Email"  onChange={(e)=>handleChange('email',e.target.value)} className="border-2 border-gray rounded-md text-black px-3"/>
          <input type="text" name="password" id="Password" placeholder="Password"  onChange={(e)=>handleChange('password',e.target.value)} className="border-2 border-gray rounded-md text-black px-3"/>
          <button type="submit" className="bg-white rounded-md font-semibold">Register</button>
        </form>
        <div className="text-[15px] text-center">Already Signed UP? <Link className="border-2 bg-white rounded-md px-1" to='/'>Login</Link></div>
      </div>
    </div>
  )
}

export default Registerpage;