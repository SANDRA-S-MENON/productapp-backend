const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {productmodel}=require("./models/product")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://sandras02:sandrasmenon@cluster0.3g103sn.mongodb.net/productdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input= req.body
    let product = new productmodel(input)
    product.save()
        res.json({"status":"success"})

    
})
app.get("/view",(req,res)=>{
    productmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8180,()=>{
    console.log("server started")
})
