import mongoose from "mongoose";
mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://Aditya:AdityaDev@cluster0.uzqbd0e.mongodb.net/Hotel_Monitoring?retryWrites=true&w=majority").then(() => {
    console.log(`Database connection established`);
}).catch((err) => {
    console.log(`Connection is not established due to error: ${err}`);
})

exports.modules={}