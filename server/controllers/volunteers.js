import { Volunteer } from "../models/volunteers.js";



export default class VolunteerController {
    static async AddVolunteer(req, res) {
        const {first_name, last_name, email} = req.body
        let volunteer = await findOne({ email });
        if (volunteer) {
            return res.status(400).json({status: false, message: `volunteer with email ${email} exists`});
        }

        volunteer = Volunteer({
            first_name,
            last_name,
            email
        })
        await volunteer.save()
        return res.status(200).json({status: true, message: `volunteer created with email ${email}`});
    }

    // Method to get all volunteers
    static async GetAllVolunteers(req, res) {
        try {
            const volunteers = await Volunteer.find();
            return res.status(200).json({ status: true, data: volunteers });
        } catch (error) {
            return res.status(500).json({ status: false, message: "Error fetching volunteers", error });
        }
    }
}