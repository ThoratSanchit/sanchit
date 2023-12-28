const express = require('express');
const router = express.Router();
const service = require('../service/service');

router.post('/large', async (req, res) => {
    try {
        const addData = await service.brandData(req.body);
      
        if (Object.keys(req.body).length === 0) {
            res.send("Add data");
        }
        res.send({
            status: "success",
            message: "Data added"

        })
    } catch (error) {
        console.log(error);
    }
});
router.get('/getData',async(req,res)=>{
    try {
        const data=await service.info(req.body);
        if(!data){
            res.send("Enter data to find");
        }
        res.send("data"+data);
        
    } catch (error) {
        console.log(error);
    }
})

router.put('/update/:id',async(req,res)=>{
    try {
        const id=await req.params.id
        
        if(!id){
            res.send({
                message:"Send valid ID",
               message: "else send ID"
            })
        }
        const up=await service.updateBrands(id,req.body);
        res.send({
            message:"udate succes",
            up
        })
    } catch (error) {
        console.log(error);
    }
});
router.delete('/delete/:id',async(req,res)=>{
    try {
        const deleteId=await service.deleteRecord(req.params.id);
        if(!deleteId){
            res.send("enter valid id");
        } 
        res.send({
            message:"Record has been deleted",
            deleteId
        })
    } catch (error) {
        console.log(error);
        
    }
})

module.exports = router;