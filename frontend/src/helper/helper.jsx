import axios from "axios";

export async function userLogin(userDetails){
  console.log(userDetails);
  try {
    const response = await axios.post("http://localhost:8000/api/login",userDetails)
    const { accessToken } = response.data;
    console.log("response data in login page", response.data.userDetails.userName);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('userName', response.data.userDetails.userName);

    return { success:true, userName:response.data.userDetails.userName }
  } catch (error) {
    return {success:false, error: error}
  }
}

export async function userLogout(userName){
  console.log(userName);
  try{
    await axios.delete('http://localhost:8000/api/logout',{
      data: {
        userName: userName,
      },
    });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");
    
    return {success:true}
  }catch(error){
    console.log("error in userLogout",error);
    return { success:false, error: error }
  }
}