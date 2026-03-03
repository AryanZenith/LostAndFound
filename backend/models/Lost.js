import mongoose from "mongoose";

const lostSchema = new mongoose.Schema(
  {
    name: String,
    item: String,
    location: String,
    description: String,
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

export default mongoose.model("Lost", lostSchema);