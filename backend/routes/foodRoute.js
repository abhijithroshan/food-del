import express from "express"
import { addFood,listFood,removeFood} from "../controllers/foodController.js"
import multer from "multer" //multer is used for image storage

const foodRouter = express.Router(); //Using Router can create get,post,etc.. methods

// Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood);





export default foodRouter;