const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/computer');
const schema=new mongoose.Schema({},{strict:false});
const userModel=new mongoose.model('Brand',schema);
module.exports=userModel;