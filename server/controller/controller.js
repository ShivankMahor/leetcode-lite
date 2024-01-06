import User from '../model/user.js'


export async function verifyUser(req,res,next){
  try{
    const {userName} =  req.body; 
    console.log(`VerifyUser ${JSON.stringify(req.body)}`)
    
    let exist = await User.findOne({userName});
    if(!exist)return res.status(500).send({error:"User Not Exist"});

    next();

  }catch(error){
    console.log("Error in verifyuser ", error);
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
  console.log(req.body);
  let user = await User.findOne({userName});
  if(!user) return res.status(500).send({error:"User Not Found"});
  if(password !== user.password) return res.status(500).send({error:"Passsword does not Match"});
  return res.status(201).json({
    msg:"Login Successful",
    userDetails:user
  })
}


// POST http://localhost:8000/api/register
// @param :{
//  "userName": "example",
//  "email": "example@gmail.com",
//  "password": 16513  
// }
export async function register(req,res){
  try{
    console.log(req.body);
    const {userName, email, password} =  req.body;
    const newuser = new User({
      userName,
      email,
      password,
    })

    const savedUser = await newuser.save();
    return res.status(200).json({
      msg: savedUser 
    })
  }catch(err){
    console.log("Error in Registering User ",err);
    return res.status(500).json({msg:'Internal Server Error'})
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

