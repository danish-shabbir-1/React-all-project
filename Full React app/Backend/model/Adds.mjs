import mongoose from "mongoose";

const { Schema } = mongoose;


const AddsSchems = new Schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    // userId: {
    //     type: String,
    //     required: true
    // }
})

const Ads = mongoose.model('adds', AddsSchems);

export default Ads


