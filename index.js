const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')
const AuthModel = require('./models/Auth')
const RegisterModel = require('./models/Register')

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/conference-DB"
).then(()=>{
    console.log("database connect")
})

app.post("/login",async(req,res)=>{
    const{email,password}=req.body  
    console.log(req.body)

    try{
        const check=await AuthModel.findOne({email:email,password:password})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})
app.post("/admin-login", async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    
    // Hardcoded credentials
    const hardcodedEmail = "ansh@gmail.com";
    const hardcodedPassword = "ansh";
  
    try {
      if (email === hardcodedEmail && password === hardcodedPassword) {
        res.json("exist");
      } else {
        res.json("notexist");
      }
    } catch (e) {
      res.json("fail");
    }
  });
  


app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await AuthModel.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await AuthModel.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/register/:id", async (req, res) => {
    const id = req.params.id;
    const { name, mobile, address, feedback } = req.body;

    const newUser = new RegisterModel({ conferenceId: id, name, mobile, address, feedback });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.get("/viewdata/:id", async (req, res) => {
    const id = req.params.id;

    RegisterModel.find({ conferenceId: id })
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

  
app.get('/', (req,res) => {
    UserModel.find({})
    .then(users => res.json(users))  
    .catch(err => res.json(err))
})

app.get('/getUser/:id', (req,res)=>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err =>res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        name: req.body.name,
        time: req.body.time,
        day: req.body.day
    })
    .then(users=>res.json(users))
    .catch(err =>res.json(err))
})

app.delete('/deleteUser/:id', (req,res) =>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(res=>res.json(res))
    .catch(err =>res.json(err))
})

app.post("/createUser", (req,res)=> {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(4001,()=>{
     console.log("server is running")
})