import TempModel from "../models/Temperature";


export const getTempData = async (req, res) => {
    try {
        const data = await fetch("https://api.thingspeak.com/channels/1976530/fields/1.json?results=20")
        const response = await data.json()
        const tempData = response.feeds
        console.log(tempData);

        console.log(res.feeds);
        for (let i = 0; i < tempData.length; i++) {
            console.log(tempData[i]["field1"]);

            const temprature = new TempModel({

                entry_id: tempData[i]["entry_id"],
                field1: tempData[i]["field1"],
                createdAt: tempData[i]["createdAt"],
            })

            temprature.save().then(() => {
                console.log("Data Saved Successfully");
            }
            ).catch((err) => {
                console.log(err);
            })
            console.log('Data Sent Successfully');
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}