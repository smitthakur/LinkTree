const mongoose =require('mongoose');

const{model,Schema}=mongoose;

const User= new Schema({
    name: {type:String},
    bio: {type:String},
    email: {type: String, required: true, unique: true },
    avatar: {type:String, default: 'default'},
    password: {type:String, required:true},
    role : {type:String, enum: ['Creator', 'Brand', "Agency",'Admin'], default: 'Creator'},
    handle: {type:String,required: true, unique: true},
    links: [{
        url: {type: String},
        title: {type: String},
        icon: {type: String},
    }],
    socialMedia: {
        facebook: {type: String},
        twitter: {type: String},
        instagram: {type: String},
        youtube: {type: String},
        linkedin: {type: String},
        github: {type: String}
    }
}, {collection: 'user-data-linktree'});

const userModel=model('userdata',User);

module.exports= userModel;