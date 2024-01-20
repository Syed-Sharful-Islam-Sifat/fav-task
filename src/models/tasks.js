import mongoose from "mongoose";

const subTaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      status:{
        type:String,
      },
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    
      deadline:{
        type: Date
      },
      assignedTo:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
      ],

    subTasks:[this]  
},{
    timestamps:true
})
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status:{
    type:String,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  deadline:{
    type: Date
  },
  assignedTo:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
  ],
  subTasks:[subTaskSchema]
},{
    timestamps:true
});

const Task = mongoose.models.Task ||  mongoose.model("Task",taskSchema);
export default Task;