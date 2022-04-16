const Order = require('../models/Order');
const User = require('../models/User');

exports.postOrder = async (req, res, next) => {
  console.log('exports.postOrder');
  try {
    // get user input
    let { products, customerInfo } = req.body.order;

    console.log('products');
    console.log(products);
    console.log('customerInfo');
    console.log(customerInfo);

    let { email } = customerInfo;

    const user = await User.findOne({ email });
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

    res.status(201).json({ status: 'created', order });
    // save the order to the database
  } catch (err) {
    console.log(err);
  }
};
