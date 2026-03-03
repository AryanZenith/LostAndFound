import mongoose from "mongoose";

const foundSchema = new mongoose.Schema(
  {
    name: String,
    item: String,
    location: String,
    image: String,
    phone: {
  type: String,
  required: true
},
userId:{
  type: mongoose.Schema.Types.ObjectId,
  ref:"User",
  required:true
}

  },
  { timestamps: true }
);

export default mongoose.model("Found", foundSchema);