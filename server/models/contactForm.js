import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        default: "Ethiopia"
    },
    postalCode: {
        type: String,
        required: true
    }
}, { timestamps: true });

const ContactModel = mongoose.model("contact", contactSchema);
export { ContactModel as Contact }