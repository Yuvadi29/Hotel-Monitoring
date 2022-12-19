import fetch from "node-fetch"

import exceljs from "exceljs";
// import db from "./config/db"
import "./config/db"
import DataFetch from "./models/tempSchema"

 
// connectivity






// async function getPostData() {
//     const data = await fetch("https://api.thingspeak.com/channels/1976530/fields/1.json?results=20")
//     const res = await data.json()
//     const tempData = res.feeds
//     // console.log(tempData);

//     // console.log(res.feeds);
//     for (let i = 0; i < tempData.length; i++) {
//         // console.log(tempData[i]["field1"]);

//         const temprature = new tempModel({

//             entry_id: tempData[i]["entry_id"],
//             field1: tempData[i]["field1"],
//             createdAt: tempData[i]["createdAt"],
//         })

//         temprature.save().then(() => {
//             // console.log("Data Saved Successfully");
//         }
//         ).catch((err) => {
//             console.log(err);
//         })
//         console.log('Data Sent Successfully');  

//     }
// }

// getPostData()


// const exportData = async (req,res) => {
//     try {
        
//         const workbook = new exceljs.Workbook();
//         const worksheet = workbook.addWorksheet('TemperatureData'); //Create an excel sheet with the name Temperature Data

//         worksheet.columns = [ //Tells which columns are to be chosen
//             // { header: "S.No", key: "s_no" },
//             { header: "Entry_id", key: "entry_id" },
//             { header: "Field1", key: "field1" },
//             { header: "CreatedAt", key: "createdAt" },
//         ];

//         let counter = 1;

//         const tempData = await TemperatureData.find({
//             createdAt: {
//                 $gte: new Date(req.body.startDate),
//                 $lte: new Date(req.body.endDate)
//             }
//         }).sort({ createdAt: 1 })

//         tempData.forEach((TempData) => {
//             TempData.entry_id = counter;

//             worksheet.addRow(TempData);
//             counter++;
//         });

//         worksheet.getRow(1).eachCell((cell) => {
//             cell.font = { bold: true};
//         })

//         res.setHeader(
//             "Content-Type",
//             "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//         )

//         res.setHeader("Content-Disposition", `attatchment: filename: Data.xlsx`);


//         return workbook.xlsx.write(res).then(() => {
//             res.status(200);
//         })
//         // })


//     } catch (error) {
//         console.log(error.message);
//     }
// }

// exportData();