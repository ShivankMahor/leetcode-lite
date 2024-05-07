import { useState } from "react";
import axios from 'axios'
import { Link,useNavigate } from "react-router-dom";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
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
      await axios.post("/api/register",user)
      alert("registration Successful");
      navigate('/')
    } catch (error) {
      alert("registration failed");
      console.log("Axios error ",error)
    }
    console.log("SUBMIT");
  }
  return (
    <div className="container mx-auto">
        <div className="formbox bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <header>
                <h1 className="text-2xl font-bold mb-6">Register</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" className="w-full px-[18px] py-[12px] mb-4  bg-red" id="namefield" value={user.userName} onChange={(e) => handleChange('userName', e.target.value)} />
                <input type="email" placeholder="Username or Email address" className="input-field mb-4 pl-2 py-3" value={user.email} onChange={(e) => handleChange('email', e.target.value)} />
                <input type="password" placeholder="Password" className="input-field mb-4 pl-2 py-3" value={user.password} onChange={(e) => handleChange('password', e.target.value)} />
                <a href="#" className="text-blue-500 block mb-4">Forget Password</a>
                <button type="submit" className="bg-[#5851e3] w-full py-4 rounded-md">Register</button>

                <p className="text-center m-2">Already a member?<Link  className=" text-[#5851e3] underline  rounded-md px-1" to='/'>Login</Link></p>
            </form>
        </div>
    </div>
  );
}

export default Registerpage;