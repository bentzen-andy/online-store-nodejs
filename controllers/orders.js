const Order = require('../models/Order');
const User = require('../models/User');

exports.postOrder = async (req, res, next) => {
  try {
    // get user input
    let { products, customerInfo } = req.body.order;

    let emailAccordingToClient = customerInfo.email;
    let emailAccordingToJsonWebToken = req.user.email;

    if (emailAccordingToClient !== emailAccordingToJsonWebToken) {
      return res.status(401).json('Invalid Token');
    }

    const user = await User.findOne({ emailAccordingToJsonWebToken });
    if (!user) return res.status(404).json('Something went wrong.');

    let customerID = user._id;
    let customerFirstName = customerInfo.firstName;
    let customerLastName = customerInfo.lastName;
    let customerStreet = customerInfo.street;
    let customerCity = customerInfo.city;
    let customerState = customerInfo.state;
    let customerZipCode = customerInfo.zip;
    let customerCreditCard = customerInfo.creditCard;
    let customerCreditCardExpireMonth = customerInfo.creditCardExpireMonth;
    let customerCreditCardExpireYear = customerInfo.creditCardExpireYear;
    let customerCreditCardCVV = customerInfo.creditCardCVV;

    // create an order object
    const order = await Order.create({
      customerID,
      customerFirstName,
      customerLastName,
      customerStreet,
      customerCity,
      customerState,
      customerZipCode,
      customerCreditCard,
      customerCreditCardExpireMonth,
      customerCreditCardExpireYear,
      customerCreditCardCVV,
      products,
    });

    res.status(200).json({ status: 'created', order });
    // save the order to the database
  } catch (err) {}
};
