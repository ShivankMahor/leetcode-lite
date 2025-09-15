// import { useEffect, useState } from "react";
// import { Link,useNavigate } from "react-router-dom";
// import { userLogin,userLogout } from "../helper/helper";

// import "./MordernForm.css"; 

// function ModernForm() {
//     const [user, setUser] = useState({
//         userName: '',
//         password: '',
//     });

//     const navigate = useNavigate();

//     function handleChange(parameter, value) {
//         setUser({ ...user, [parameter]: value });
//     };

//     useEffect(() => {
//         const check = async () => {
//             const userName = localStorage.getItem('userName');
//             const token = localStorage.getItem('accessToken');
//             console.log("check in logout")
//             if (userName && token) {
//                 const response = await userLogout(userName);
//                 let { success } = response;
//                 if (!success) {
//                     console.log("Axios error ", response ? response.error.message : 'X');
//                 } else {
//                     // console.log("User ",user);
//                 }
//             }
//         }
//         check();
//     }, [])

//     async function handleSubmit(e) {
//         e.preventDefault();
//         const response = await userLogin(user);
//         let { success } = response;
//         console.log("Success", success)
//         console.log("response", response)

//         if (!success) {
//             console.log("Axios error ", response.error ? response.error : 'X');
//             // console.log("testtt",response.error.message ? response.error.message : response.error.response.data.statusText)
//             alert(response.error.message ? response.error.message : response.error.response.data.statusText)
//         } else {
//             alert("Login Successful")
//             navigate(`/homepage/${response.userName}`)
//             console.log(user)
//         }
//     }
//     function handleDemoCredential(){
//         setUser({
//             userName: "ShivankMahor",
//             password: "Shivank@2003"
//         })
//     }
//     return (
//         <div className="container mx-auto">
//             <div className="formbox bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//                 <header>
//                     <h1 className="text-2xl font-bold mb-6">Login</h1>
//                 </header>
//                 <form onSubmit={handleSubmit}>
//                     <input type="text" placeholder="Username or Email address" className="input-field mb-4 pl-2 py-3" value={user.email} onChange={(e) => handleChange('userName', e.target.value)} />
//                     <input type="password" placeholder="Password" className="input-field mb-4 pl-2 py-3" value={user.password} onChange={(e) => handleChange('password', e.target.value)} />
//                     <a href="#" className="text-blue-500 block mb-4">Forget Password</a>
//                     <button type="submit" className="bg-[#5851e3] w-full py-4 rounded-md">Login</button>
//                     <button onClick={handleDemoCredential} className="bg-[#5851e3] w-full py-4 rounded-md mt-3">Demo Login</button>

//                     <p className="text-center m-2">Not a member?<Link  className=" text-[#5851e3] underline  rounded-md px-1" to='/register'>Register Now</Link></p>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default ModernForm;


import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin, userLogout } from "../helper/helper";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./MordernForm.css"; 

function ModernForm() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(parameter, value) {
    setUser({ ...user, [parameter]: value });
  }

  useEffect(() => {
    const check = async () => {
      const userName = localStorage.getItem("userName");
      const token = localStorage.getItem("accessToken");
      if (userName && token) {
        const response = await userLogout(userName);
        if (!response.success) {
          toast.error(response?.error?.message || "Logout failed", {
            position: "top-right",
          });
        }
      }
    };
    check();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await userLogin(user);
    let { success } = response;

    if (!success) {
      toast.error(
        response?.error?.message ||
          response?.error?.response?.data?.statusText ||
          "Login failed",
        { position: "top-right" }
      );
    } else {
      toast.success("Login Successful 🎉", { position: "top-right" });
      navigate(`/homepage/${response.userName}`);
    }
  }

  function handleDemoCredential() {
    setUser({
      userName: "ShivankMahor",
      password: "Shivank@2003",
    });
    toast.info("Demo credentials filled!", { position: "top-right" });
  }

  return (
    <div className="container mx-auto">
      {/* Toast container must be included once */}
      <ToastContainer />

      <div className="formbox bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <header>
          <h1 className="text-2xl font-bold mb-6">Login</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username or Email address"
            className="input-field mb-4 pl-2 py-3"
            value={user.userName}
            onChange={(e) => handleChange("userName", e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field mb-4 pl-2 py-3"
            value={user.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
          <a href="#" className="text-blue-500 block mb-4">
            Forget Password
          </a>
          <button
            type="submit"
            className="bg-[#5851e3] w-full py-4 rounded-md text-white"
          >
            Login
          </button>
          <button
            type="button"
            onClick={handleDemoCredential}
            className="bg-[#5851e3] w-full py-4 rounded-md mt-3 text-white"
          >
            Demo Login
          </button>

          <p className="text-center m-2">
            Not a member?
            <Link
              className=" text-[#5851e3] underline rounded-md px-1"
              to="/register"
            >
              Register Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ModernForm;
