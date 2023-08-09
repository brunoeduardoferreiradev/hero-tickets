import mongoose from "mongoose";

export async function connect(){
    try {
        await mongoose.connect('mongodb+srv://bruno:mudar123@cluster0.t17wi.mongodb.net/hero-tickets');
        console.log('Database successfully connected !!!');
    } catch (error) {
        console.log(" ~ file: database.ts:5 ~ connect ~ error: ", error);
    }
}