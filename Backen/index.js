require('dotenv').config()
const express=require("express")
const Connect=require("./Config/Config")
const app = express();
const cors=require("cors")
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.listen(process.env.PORT,async(req,res)=>{
    try{
      await Connect
      console.log("server is running in Port 8080")
    }
    catch{
        console.log("Server Error")
    }
});