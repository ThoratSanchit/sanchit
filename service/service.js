const userSchema = require('../model/model');

const app = {
    brandData: async (data) => {
        return await userSchema.create(data);
    },

    info:async(data)=>{
        return await userSchema.find(data);
    },
    updateBrands:async(id,data)=>{
        return await userSchema.findByIdAndUpdate(id,data,{new :true});
    },
    deleteRecord:async(id)=>{
        return await userSchema.findByIdAndDelete(id);
    }
  
}
module.exports = app;