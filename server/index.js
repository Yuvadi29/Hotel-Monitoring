import fetch from "node-fetch"
import mongoose from "mongoose";


// connectivity
mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://Aditya:AdityaDev@cluster0.uzqbd0e.mongodb.net/Hotel_Monitoring?retryWrites=true&w=majority").then(() => {
    console.log(`database connection established`);
}).catch((err) => {
    console.log(`Connection is not established due to error: ${err}`);
})

const tempSchema = new mongoose.Schema({
    entry_id: {
        type: Number,
        required: true,
    },
    field1: {
        type: String,
        required: true,
    }
})

const tempModel = mongoose.model('TemperatureData', tempSchema)



async function getPostData() {
    const data = await fetch("https://api.thingspeak.com/channels/1976530/fields/1.json?results=20")
    const res = await data.json()
    const tempData = res.feeds
    console.log(tempData);

    // console.log(res.feeds);
    for (let i = 0; i < tempData.length; i++) {
        console.log(tempData[i]["field1"]);

        const temprature = new tempModel({

            entry_id: tempData[i]["entry_id"],
            field1: tempData[i]["field1"],
        })

        temprature.save().then(() => {
            console.log("data saved");
        }
        ).catch((err) => {
            console.log(err);
        })

    }
}

getPostData()