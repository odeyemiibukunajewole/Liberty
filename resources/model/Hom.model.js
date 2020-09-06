const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
            trim:true,
        },
        DOB:{
            type:dat
        }
    }
)