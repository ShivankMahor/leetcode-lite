import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom"

export default function ProtectedRoute({children}){
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const location = useLocation();
  useEffect(()=>{
    const verifyToken = async () => {
      try{
        const token = localStorage.getItem('accessToken');
        if(!token) throw new Error ('Token not found');
        // await new Promise(resolve => setTimeout(resolve, 2000));
        const response = await axios.post("http://localhost:8000/api/verify", { data :{ token }})
        console.log("Response o ja f ",response.data.success)
        if(!response.data.success) throw new Error ('Token verification failed');
        console.log("is erroethaoi dhoaf")
        setLoading(false);
        setVerified(true);
      }catch(error){
        console.log('Errore :',error);
        setLoading(false);
        setVerified(false);
      }
    }
    verifyToken();
  },[location.pathname])
  const navigateToHome = !loading && !verified && <Navigate to="/" />;
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {verified && !loading && children}
      {navigateToHome}
    </>
  );
}
