const User= require("../models/user");
const jwt= require('jsonwebtoken');
// const SECRET_JWT='testkey';

const registerUser = async (req,res)=>{
    const { handle, email, password, category } = req.body;
    console.log(req.body);
    try{
        const defaultLink= {url: 'typefinance.com' , title:'TypeFinance', icon:''}
    const user= await User.create({handle, email, password, role: category, links: [defaultLink]})
    const token = jwt.sign ({email:email}, process.env.SECRET_JWT);
    return res.json({message: 'user created' , status:'success', 'token': token , id: user._id});
    } catch(err){
        if(err.code==='11000'){
            return res.json({message: 'try different handle' , status:'error'});
        }
        return res.json({message: err.message , status:'error'});

    }
}

const loginUser = (req,res)=>{
    const { email, password } = req.body;
    try{
        const user=User.findOne({email: email, password: password});
        console.log(user);
        if(!user){
            return res.json({status: 'not found', error:'Invalid credentials'});
        }
        const token = jwt.sign ({email:email}, process.env.SECRET_JWT);
        return res.json({message: 'user found' , status:'success', 'token': token , id: user._id});
    }catch(err){
        return res.json({message: err.message , status:'error'});
    }
}


module.exports = {registerUser, loginUser};