import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    task: {
        type: Array
    }
}, { timestamps: true });

export const Volunteer = mongoose.model("volunteer", volunteerSchema);