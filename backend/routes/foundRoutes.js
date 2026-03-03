import express from "express";
import multer from "multer";
import Found from "../models/Found.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.post("/add", auth, upload.single("image"), async (req,res)=>{
  const { name, item, location } = req.body;

  const foundItem = new Found({
    name,
    item,
    location,
    phone:req.body.phone,
    image: req.file.filename,
    userId:req.userId
  });

  await foundItem.save();
  res.status(201).json(foundItem);
});

router.get("/", async (req, res) => {
  const items = await Found.find().sort({ createdAt: -1 });
  res.json(items);
});

router.get("/:id", async (req, res) => {
  const item = await Found.findById(req.params.id);
  res.json(item);
});
router.delete("/:id", auth, async (req,res)=>{
  const item = await Found.findById(req.params.id);

  if(!item) return res.status(404).json({msg:"Not found"});

  if(item.userId.toString() !== req.userId)
     return res.status(403).json({msg:"Not authorized"});

  await item.deleteOne();
  res.json({msg:"Deleted"});
});


export default router;