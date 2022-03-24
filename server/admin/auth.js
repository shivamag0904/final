const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

// require("../db/conn");
const User = require("../model/userSchema");
const { validateSigninRequest, validateRegisterRequest } = require("../validator/auth");
router.get("/", (req, res) => {
  res.send("heloo from the server");
});

//using promises

// router.post('/register',(req,res)=>{

//     const {name,email,phone,work,password,cpassword} = req.body;

//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error:"plz filled the field properly"});
//     }

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error: "Email Already Exist"});
//         }

//         const user = new User({name,email,phone,work,password,cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message:"user register successfull"});
//         }).catch((err)=>res.status(500).json({error : "failed register"}));
//     }).catch(err=>{console.log(err);})

// })
// console.log(name);
// console.log(email);
// res.send('mera req page');
// res.json({message:req.body});

router.post("/admin/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;

  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "plz filled the field properly" });
  }

  try {
    const userExist = await User.findOne({ email: req.body.email });

    if (userExist) {
      return res.status(422).json({ error: "Email Already Exist" });
    }

    const user = new User({
      name,
      email,
      phone,
      password,
      cpassword,
      username: Math.random().toString(),
      role:'admin'
    });

    const userRegister = await user.save();

    console.log(`${user} Admin Registered successfully`);
    console.log(userRegister);
    res.status(201).json({ message: "Admin register successfull" });
    //   if(userRegister){

    //   }
    //   else{
    //     res.status(500).json({error:"failed to message"});
    //   }
  } catch (err) {
    console.log(err);
  }
});

//login route

router.post("/admin/signin",async (req, res) => {
  try {
    let token;
    if (!email || !password) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const { email, password } = req.body;

    const userLogin = await User.findOne({ email: req.body.email });
    // console.log(userLogin);
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (isMatch && userLogin.role === 'admin') {
     
        res.json({ message: "Admin signed in successfully" });
      } else {
        res.status(400).json({ message: "admin error pass" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credientials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/logout", (req, res) => {
  console.log(`Hello my logout page`);
  res.clearCookie("jwtoken", { path: "/ " });
  res.status(200).send("User logout");
});
module.exports = router;
