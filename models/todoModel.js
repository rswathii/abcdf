import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    todo:{
        type:String,
        require:true
    }
})

export default mongoose.model("todo", todoSchema)