import User from '../model/user.js'
import Comment from '../model/comments.js'
import RefreshToken from '../model/refreshtoken.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export async function verifyUser(req,res,next){
  try{
    const {userName} =  req.body; 
    console.log(`VerifyUser ${JSON.stringify(req.body)}`)
    
    let exist = await User.findOne({userName});
    if(!exist)return res.status(500).send({error:"User Not Exist"});

    next();

  }catch(error){
    console.log("Error in verifyuser ", error);
    return res.status(500).send({error:error});
  }
}

/** POST: http://localhost:8000/api/login 
  * body : {
  "userName" : "example123",
  "password" : "admin123"
  }
*/
export async function login(req,res){
  const {userName, password} = req.body;
  
  try {
    console.log("console in login controller", req.body);
    let user = await User.findOne({userName});
    if(!user) return res.status(500).send({error:"User Not Found"});

    const data = {userName:user.userName}
    if(await bcrypt.compare(password,user.password)){
      console.log('login log',user)
      const refreshToken = jwt.sign(user.userName, process.env.REFRESH_TOKEN_SECRET);
      const reftoken = new RefreshToken({
        refreshToken,
        userName:user.userName,
      })
      const accessToken = generateJwtToken(data);
      const savedRefToken = await reftoken.save(reftoken);
        return res.status(201).json({
          msg:"Login Successful",
          userDetails:user,
          accessToken: accessToken,
          refreshToken: savedRefToken.refreshToken
        })
      // console.log('Saved refresh Token: ',savedRefToken);
    }else{
      return res.status(500).send({error:"Passsword does not Match"});
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(403)
  }
}

// POST http://localhost:8000/api/register
// @param :{
//  "userName": "example",
//  "email": "example@gmail.com",
//  "password": 16513  
// }
export async function register(req,res){
  try{
    console.log("\nreq.body in register\n",req.body);

    const {userName, email, password} =  req.body;
    const hashedPassword = await bcrypt.hash(password,10)
    const newuser = new User({
      userName,
      email,
      password:hashedPassword,
    })
    // const error = newuser.validateSync();
    // console.log(`\n ${error} \n`,)
    const savedUser = await newuser.save();
    return res.status(200).json({
      msg: "Registration Successful", 
      savedUser 
    })
  }catch(err){
    console.log("Error in Registering User ",err.message);
    return res.status(500).json({msg:'Internal Server Error', error:err.message})
  }
}

//http://127.0.0.1:8000/api/user/Shivank
export async function getuser(req,res){
  try{
    const {userName} = req.params;
    console.log('username = ',userName);
    const user = await User.findOne({userName});
    const {password, ...rest} = Object.assign({}, user.toJSON())
    console.log(`Password : ${password}`);
    return res.status(201).json({msg:rest})
  }catch(err){
    console.log("Error in getting user ", err);
    res.status(500).send({msg:"Internal Server Error"})
  }
}

export async function logout(req,res){
  try{
    console.log("\nReq.body\n ", req.body)
    const {userName} = req.body;
    const refreshToken = await RefreshToken.findOne({userName}); 
    if(refreshToken == null) return res.status(500).send("RefreshToken not exist ");
    const response = await RefreshToken.deleteOne({userName});
    console.log("RefreshToken detail in logout ",refreshToken);
    // console.log("RefreshToken detail in logout ",response);
    return res.status(200).send({
      msg:"Logout Successful",
      response,
      Time:Date.now()
    });
  }catch(error){
    return res.status(500).send('error in logout');
  }
}

export async function tokenRegenerate(req,res){
  try{
    const { token } = req.body;
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err,user)=>{
      if(err) return res.sendStatus(401) //' Unauthorized

      const newtoken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h"});
      return res.status(200).json({
        msg:"Token generated Successfully",
        newaccessToken: newtoken
      })
    }) 
  }catch(error){
    return res.sendStatus(500);
  }
}

// data{
//   topicTitle,tags[],description,createdBy
// }
export async function postComment(req,res){
  try{
    const data = req.body.data;
    console.log(`\n${data}\n`)
    const newComment = new Comment({
      topicTitle: data.topicTitle,
      tags: data.tags,
      description: data.description,
      createdBy: data.createdBy,
    })

    const savedComment = await newComment.save();
    return res.status(200).send({
      message: "Comment Uploaded",
      Comment:savedComment,
    })

  }catch(error){
    console.loh(error);
    return res.status(400).send({
      message:"Error in saving Comment",
      error: error
    })
  }
}

export async function getComments(req,res){
  try{
    const response = await Comment.find().sort({ votes: -1, views: -1 }).limit(10);
    console.log(response);
    return res.status(200).send({
      success: true,
      comments: response
    })
  }catch(error){
    console.log(error);
    
    // return res.status(400).send(str)
    return res.status(400).send("Error in comment.find()", str)
  }
}

function generateJwtToken(data){
  return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {expiresIn:"10h"});
}

