import jwt from "jsonwebtoken";

export async function verifyToken(req,res,next){
  try{
    const { token } = req.body.data;
    console.log("verify token funciton",req.body, token);
    if(!token) return res.status(400).send({success: false, message:"Token not provided"})

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error,user) =>{
      if(error) return res.status(400).send({success: false, message:"Token verification failed", error});
      res.status(200).send({success: true, message:"Token Verified", data:{user}})
      next();
    })
  }catch(err){
    console.log(err);
    return res.status(500).send(err);
  }
}

export function auth(req,res,next){
  const authHeaders = req.headers['authorization'];
  const token = authHeaders && authHeaders.split(' ')[1];

  if(token == null) return res.sendStatus(401); //' Unauthorized
  console.log("Token :",token)
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
    if(err) return res.status(403).send(err); //' Forbidden
    console.log("Inside AUTH ", user)
    req.user = user;
    next();
  })
}