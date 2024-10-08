/*eslint-disable */

import dotenv from "dotenv";
import axios from "axios";
import { Donation } from "../models/donation.js";

dotenv.config();


const header = {
    headers: {
        Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
    },
}


export default class PaymentGateway {

    /**
     * `initiatePayment` initiates a payment transaction using data from the request query
     * and returns a checkout URL in the response.
     */
    static async initiatePayment(req, res) {
        console.log("payment intiation route")
        let { amount, email, first_name, last_name, currency} = req.body
        if (amount === undefined) {
            return res.status(400).json({message: "amount required"})
        }
        
        if (typeof amount != "number") {
            try {
                amount = parseInt(amount);
            } catch(err) {
                return res.status(400).json({message: "amount must be integer"})
            }
            // return res.status(400).json({message: "amount must be integer"})
        }
        if (amount <= 0) {
            return res.status(400).json({message: "amount must be greater than 0"})
        }

        if (!email) {
            return res.status(400).json({message: "email required"})
        }

        if (!currency) {
            currency = "ETB"
        }


        const tx_ref = "tx-eavo-donation-" + Date.now();
        const transaction = await Donation.findOne({tx_ref});
        if (transaction) {
            return res.status(400).json({message: "transaction reference already used"});
        }
        const callback_url = process.env.CALLBACK_URL; 
        const return_url = process.env.RETURN_URL;
        const customization = {
            title: "Support",
            description: "Empower African voices with us."
        }
        const data = { 
            amount,
            email,
            first_name,
            last_name,
            currency,
            tx_ref,
            callback_url,
            return_url,
            customization
        };
        await axios
        .post(process.env.CHAPA_INITIATE_URL + '?' + new URLSearchParams(data), data, header)
        .then((response) => {
            return res.status(200).json(
                {
                    checkout_url: response.data.data.checkout_url,
                    tx_ref
                }
            );
        })
        .catch((err) => {
            return res.status(400);
        })
    }

    /**
     *  `verifyPayment` asynchronously verifies a payment transaction using an external API
     * and saves the transaction details to a database.
     */
    static async verifyPayment(req, res) {
        const tx_ref = req.params.tx_ref;
        await axios
        .get(`${process.env.CHAPA_VERIFY_URL}/${tx_ref}`, header)
        .then(async (response) => {
            if (response.data.data.status == "success") {
                const {email, amount, currency} = response.data.data;
                const transaction = await Donation.findOne({ tx_ref });
                if (transaction)
                    return res.status(200).json({status: "success"});
                const newDonation = new Donation({
                    email,
                    amount,
                    currency: "ETB",
                    tx_ref
                })
                await newDonation.save()
            } else if (response.data.data.status == "pending") {
                return res.status(200).json({status: "pending"});
            }
            return res.status(200).json({status: "failed"});
        })
        .catch((err) => {
            return res.status(400);  
        })
    }

}