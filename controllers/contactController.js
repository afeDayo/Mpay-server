const Contact = require("../models/Contact");

// CONTROLLER TO SUBMIT CONTACT
const submitContact = async (req, res) => {
  const { name, email, subject, message } = req.body;

  //   1. save all the data that will be in these keys in the database
  const contactInfo = await Contact.create({ name, email, subject, message });

  console.log(req.body);
  console.log(contactInfo);

  //  2.  response message if successfull
  res.status(201).json({ message: "Submitted successfully" });
};

module.exports = submitContact;
