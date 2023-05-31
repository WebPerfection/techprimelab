const express=require("express")
const projectRoute=express.Router()
const {ProjectModel} =require("../Model/ProjectModel")


projectRoute.get("/", async (req, res) => {
    const { authorization } = req.headers;
    const { search } = req.query;
  
    try {
        const query = {
            userID: authorization,
            $or: [
              { project_theme: { $regex: search, $options: 'i' } },
              { reason: { $regex: search, $options: 'i' } },
              { type: { $regex: search, $options: 'i' } },
              { division: { $regex: search, $options: 'i' } },
              { category: { $regex: search, $options: 'i' } },
              { priority: { $regex: search, $options: 'i' } },
              { department: { $regex: search, $options: 'i' } },
              { start_date: { $regex: search, $options: 'i' } },
              { end_date: { $regex: search, $options: 'i' } },
              { location: { $regex: search, $options: 'i' } },
              { status: { $regex: search, $options: 'i' } },
            ],
          };
  
      const data = await ProjectModel.find(query);
      res.send(data);
    } catch (err) {
      res.send(err);
    }
  });
  
 projectRoute.post("/",async(req,res)=>{
    const {authorization}=req.headers
    const payload=req.body
    try{
      const data=new ProjectModel({...payload,userID:authorization})
      await data.save()
      res.send(data)
    }
    catch(err){
        res.send(err)
    }
 })
projectRoute.patch("/:id",async(req,res)=>{
    const id=req.params.id
    const payload=req.body
    try{
        const data=await ProjectModel.findByIdAndUpdate({"_id":id},payload)
        res.send(data)
    }
    catch(err){
        res.send(err)
    }
})


module.exports={
    projectRoute
}