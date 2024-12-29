import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://abhijith:abhijith24$@cluster0.bwguu.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}