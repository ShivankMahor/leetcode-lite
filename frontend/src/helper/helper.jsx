import axios from "axios";
// axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

export async function userLogin(userDetails){
  console.log(userDetails);

  try {
    const response = await axios.post("/api/login",userDetails)
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
  console.log(process.env.REACT_APP_SERVER_DOMAIN)
  try{
    await axios.delete('api/logout',{
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

export async function getComments(query){
  try{
    console.log("query:", query)
    const response = await axios.get(`/api/getcomments/${query}`)
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
    const response = await axios.get('/api/gettags');
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

export async function postComment(title, mtags, description) {
  const capitalizeWords = (mtags) => {
    return mtags.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1));
  };
  const tagsArray = capitalizeWords(mtags);
  try {
    const response = await axios.post('/api/postcomment',{
      data:{
        tags:tagsArray,
        topicTitle:title,
        description:description,
        createdBy:localStorage.getItem('userName')
      }
    },
    {
      headers: {
        authorization: localStorage.getItem('accessToken'),
      },
    })
    console.log(response);
    return {
      success:true,
      response: response.data.comment
    }
  } catch (error) {
    console.log(error)
    return {
      success: false,
      error: error
    }
  }
}
