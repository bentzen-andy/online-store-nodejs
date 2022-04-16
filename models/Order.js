const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerID: { type: String },
  customerFirstName: { type: String },
  customerLastName: { type: String },
  customerStreet: { type: String },
  customerCity: { type: String },
  customerState: { type: String },
  customerZipCode: { type: String },
  customerCreditCard: { type: String },
  customerCreditCardExpireMonth: { type: String },
  customerCreditCardExpireYear: { type: String },
  customerCreditCardCVV: { type: String },
  products: { type: [Object] },
});

module.exports = mongoose.model('order', orderSchema);
