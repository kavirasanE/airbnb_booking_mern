import express  from 'express'
import cors  from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import  bcrypt from 'bcryptjs'
import User from './models/User.js';

dotenv.config()
 const bcryptSalt = await bcrypt.genSalt(10);

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}));
app.get('/test' ,(req,res) => {
    res.json('ok')
});

app.post('/register',async (req,res) => {
    const {name,email,password} =req.body;
    try{
        const userDoc = await User.create({
            name,
            password:bcrypt.hashSync(password,bcryptSalt),
            email:bcrypt.hashSync(email,bcryptSalt),
         });
         res.json(userDoc);
    }
    catch(err){
        res.status(400).json(err);
    }
});

app.post ('/login' , async (req,res) => {
    const {email,password} =req.body;
    const userDoc =await User.findOne({email})
    if(userDoc) {
        const passOk = bcrypt.compareSync(password,userDoc.password)
        if(passOk) {
            res.json('pass ok')
        }else{
            res.json('pass not ok')
        }
        res.json("found")
    } else {
        res.json('not found ')
    }
   
})

app.listen(4000 ,() => {
    console.log('server')
});
mongoose.connect(process.env.MONGO_URL);
