const mongoose = require('mongoose');

const Temperature = new mongoose.Schema({
    entry_id: {
        type: Number,
        required: true,
    },
    field1: {
        type: Number,
        required: true,
    },
})

const TempModel = mongoose.model('TemperatureData', Temperature);
module.exports = TempModel;












