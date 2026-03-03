import express from "express";
import multer from "multer";
import Lost from "../models/Lost.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.post("/add", auth, upload.single("image"), async (req,res)=>{

  const { name, item, location, description } = req.body;

  const lostItem = new Lost({
    name,
    item,
    location,
    phone:req.body.phone,
    description,
    image: req.file.filename,
    userId:req.userId
  });

  await lostItem.save();
  res.status(201).json(lostItem);
});

router.get("/", async (req, res) => {
  const items = await Lost.find().sort({ createdAt: -1 });
  res.json(items);
});
router.get("/:id", async (req,res) => {
  const item = await Lost.findById(req.params.id);
  res.json(item);
})
router.delete("/:id", auth, async (req,res)=>{
  const item = await Lost.findById(req.params.id);

  if(!item) return res.status(404).json({msg:"Not found"});

  if(item.userId.toString() !== req.userId)
     return res.status(403).json({msg:"Not authorized"});

  await item.deleteOne();
  res.json({msg:"Deleted"});
});


export default router;