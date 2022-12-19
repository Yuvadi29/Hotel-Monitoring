




import mongoose from 'mongoose'
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
module.exports=tempModel












