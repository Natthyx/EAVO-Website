import { Volunteer } from "../models/volunteers.js";



export default class VolunteerController {
    static async AddVolunteer(req, res) {
        const {first_name, last_name, email, phone, postalCode, country} = req.body
        let volunteer = await Volunteer.findOne({ email });
        if (volunteer) {
            return res.status(400).json({status: false, message: `volunteer with email ${email} exists`});
        }

        volunteer = Volunteer({
            first_name,
            last_name,
            email,
            phone,
            postalCode,
            country
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

    static async GetVolunteer(req, res) {
        const {first_name, last_name, email, phone, postalCode, country, task} = req.query;
        let filteredVolunteer = await Volunteer.find();
        if(first_name) {
            filteredVolunteer = filteredVolunteer.filter(elem => elem.first_name === first_name);
        }

        if(last_name) {
            filteredVolunteer = filteredVolunteer.filter(elem => elem.last_name === last_name);
        }

        if(email) {
            filteredVolunteer = filteredVolunteer.filter(elem => elem.email === email);
        }

        if(phone) {
            filteredVolunteer = filteredVolunteer.filter(elem => elem.phone === phone);
        }

        if(postalCode) {
            filteredVolunteer = filteredVolunteer.filter(elem => elem.postalCode === postalCode);
        }

        if(country) {
            filteredVolunteer = filteredVolunteer.filter(elem => elem.country === country);
        }

        if(task) {
            filteredVolunteer = filteredVolunteer.filter(elem => elem.task.includes(task));
        }
        return res.status(200).json({volunteers: filteredVolunteer});
    }

    // static async AssignVolunteer(req, res) {
    //     const 
    // }
    
}