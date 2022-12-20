const Visitor=require('../model/Visitors')
const router =require('express').Router()
router.post('/info',async(req,res)=>{
    const {host}=req.body;
    try {
        const vis= await Visitor.findOne({host:host});
        if(!vis){
            return res.json({status:`record doesnot exist for ${host}`});
        }
  
        res.json({status:"visitor count info",detail:vis})
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})
router.post('/count',async(req,res)=>{
    const {host}=req.body;

    try {
        const vis= await Visitor.findOne({host:host});
        if(!vis){
                const temp={
                    host:host,
                    visitors:1,
             
                }
            const createvis= await Visitor.create(temp)
            return res.json({status:`counter created for ${host}`,detail:createvis});
        }
  
        let updatedvis=await Visitor.findOneAndUpdate({host:host},{visitors:(vis.visitors)+1},{new:true})
        res.json({status:"visitor count updated",detail:updatedvis})
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
  })
router.put('/reset',async(req,res)=>{
    const {host}=req.body;
    try {
        const vis= await Visitor.findOne({host:host});
        if(!vis){
            return res.json({status:`record doesnot exist for ${host}`});
        }
  
        let updatedvis=await Visitor.findOneAndUpdate({host:host},{visitors:0},{new:true})
        res.json({status:"visitor count updated",detail:updatedvis})
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})
router.delete('/delete',async(req,res)=>{
    const {host}=req.body;
    try {
        const vis= await Visitor.findOne({host:host});
        if(!vis){
            return res.json({status:`record doesnot exist for ${host}`});
        }
  
        let deletedvis=await Visitor.findOneAndDelete({host:host})
        res.json({status:"visitor count deleted",detail:deletedvis})
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})
module.exports=router