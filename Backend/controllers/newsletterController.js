const Newsletter = require("../models/Newsletter");

const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;
    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();
    res.status(200).json({ message: "You have successfully subscribed to our newsletter!" });
  } catch (error) {
    res.status(500).json({ message: "There was an error subscribing to the newsletter." });
  }
};

module.exports = subscribeNewsletter
