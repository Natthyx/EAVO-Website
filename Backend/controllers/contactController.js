const Contact = require('../models/Contact');

const sendContactForm = async (req, res) => {
  try {
    const { name, email, phone, country, postalCode } = req.body;
    const newContact = new Contact({ name, email, phone, country, postalCode });
    await newContact.save();
    res.status(200).json({ message: 'Your message has been sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'There was an error sending your message.' });
  }
};

module.exports = sendContactForm