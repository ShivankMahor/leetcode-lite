import jwt from "jsonwebtoken";

export async function verifyToken(req,res){
  try{
    const { token } = req.body.data;
    console.log("verify token funciton",req.body, token);
    if(!token) return res.status(400).send({success: false, message:"Token not provided"})

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error,user) =>{
      if(error) return res.status(200).send({success: false, message:"Wrong token"});
      return res.status(200).send({success: true, message:"Token Verified", data:{user}})
    })
  }catch(err){
    console.log(err);
    return res.status(500).send(err);
  }
}