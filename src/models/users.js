import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    assignedInto: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
      },
    ],

    taskCreated:[
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task",
          },
    ],
  
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User",userSchema);
export default User;