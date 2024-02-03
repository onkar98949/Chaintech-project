const express = require('express')
const app = express();
const port = 8000;
const mongoose = require('mongoose')
const cors = require('cors')
const registered = require('./Schema');
const account = require('./Schema/accountSchema');

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
    try {
        const { email,name, password } = req.body;

        const existingUser = await registered.findOne({email});

        if(existingUser){
            return res.status(400).json('User Already exists')
        }

        const newUser = registered({
            email,
            password,
            name
        })

        await newUser.save();
        res.status(200).json(newUser)

    } catch (err) {
        res.status(400).json('Please Retry')
    }
})

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const userData = await registered.findOne({ email, password })
        
        if (userData) {
            return res.status(200).json({msg:"login successful"})
        }else{
            return  res.status(400).json({error:'Wrong Credentials'})
        }

    } catch (error) {
        res.status(400).json({error:'Wrong Credentials'})
    }
})

app.post('/account',async(req,res)=>{
    try{
        const { email, phone , pincode, city ,state, dob , degree, course } = req.body;

        const newAccount = account({
            phone , pincode, city ,state, dob , degree, course
        })

        const new_account = await newAccount.save();
        if(new_account){
            return res.status(200).json({msg:"account created"})
        }
        return res.status(400).json({msg:"Try again"})

    }catch(err){
        res.status(400).json({error:'Cannot create account'})
    }
})

app.get('/account',async(req,res)=>{
    try{

        const foundAccount = await findOne({email});
        if(foundAccount){
            return res.status(200).json(foundAccount)
        }
        return res.status(400).json({msg:"try again"})

    }catch(err){
        res.status(400).json({error:'Account not found'})
    }
})


app.put('/update_account',async(req,res)=>{
    try{
        const { email, phone , pincode, city ,state, dob , degree, course } = req.body;

        const updatedAccount = await updateOne({email},{ phone , pincode, city ,state, dob , degree, course});
        if(updatedAccount){
            return res.status(200).json({msg:"update successful"})
        }
        return res.status(400).json({msg:"Try again"})

    }catch(err){
        res.status(400).json({error:'Cannot Update'})
    }
})



mongoose.connect('mongodb://127.0.0.1:27017/details')
    .then(() => { console.log('Db Connected'); })
    .catch((err) => { err })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})