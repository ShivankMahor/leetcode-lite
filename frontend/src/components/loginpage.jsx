import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { userLogin,userLogout } from "../helper/helper";

function Loginpage(){
  const [user, setUser] = useState({
    userName: 'Shivank',
    password:'12345',
  });
  
  const navigate = useNavigate();
  function handleChange(parameter, value){
    console.log('parameter ', value);
    setUser({...user, [parameter]:value});
  };

  useEffect(()=>{
    const check = async()=>{
      const userName = localStorage.getItem('userName');
      const token = localStorage.getItem('accessToken');
      console.log("check in logout")
      if(userName && token){
        const response = await userLogout(userName);
        let { success } = response;
        if(!success){
          console.log("Axios error ",response.error? response.error : 'X');
        }else{
          console.log("User ",user);
        }
      }
    }
    check();
  },[])

  async function handleSubmit(e){
    e.preventDefault();
    const response = await userLogin(user);  
    let {success} = response; 
    console.log("Success", success)
    console.log("response", response)

    if(!success){
      console.log("Axios error ",response.error? response.error : 'X');
      alert(response.error.response.data.error? response.error.response.data.error : response.error.response.data.statusText )
    }else{
      alert("Login Successful")
      navigate(`/homepage/${response.userName}`)
      console.log(user)
    }
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
        <div className="text-md text-center">Not a member <Link  className="border-2 bg-white rounded-md px-1" to='/register'>Register Now</Link></div>
      </div>
    </div>
  )
}

export default Loginpage;