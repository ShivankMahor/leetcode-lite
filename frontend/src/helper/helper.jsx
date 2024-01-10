import axios from "axios";
// axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
export async function userLogin(userDetails){
  console.log(userDetails);
  console.log(process.env.REACT_APP_SERVER_DOMAIN);
  
  try {
    const response = await axios.post("http://localhost:8000/api/login",userDetails)
    const { accessToken } = response.data;
    console.log("response data in login page", response.data.userDetails.userName);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('userName', response.data.userDetails.userName);

    return { success:true, userName:response.data.userDetails.userName }
  }catch(error){
    return { success:false, error:error }
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

export async function getComments(){
  try{
    const response = await axios.get('http://localhost:8000/api/getcomments')
    console.log("this is response",response.data.comments)
    return {
      success: true,
      comments: response.data.comments,
    };
  }catch(error){
    return {
      success: false,
      error: error
    }
  }
}

export async function getTags(){
  try{
    const response = await axios.get('http://localhost:8000/api/gettags');
    console.log(response)
    return {
      success: true,
      tags: response.data.tags,
    }
  }catch(error){
    console.log(error);
    return {
      success: false,
      error:error,
    }
  }
}