const Cart = require('../models/Cart');
const Product = require('../models/Product');

exports.postProductToCart = async (req, res, next) => {
  const productID = req.body.productID;
  const userID = req.user.user_id;
  let cart = null;

  try {
    // look up to see if this customer already has a cart in the database
    cart = await Cart.findOne({ owner: userID });
    if (!cart) {
      // create shopping cart in the database
      cart = await Cart.create({
        owner: userID,
        products: [],
      });
    }

    // add this product to the shopping cart
    cart.products.push(productID);
    await cart.save();

    res
      .status(200)
      .json({ status: 'Product successfully added the cart.', cart });
  } catch (err) {
    console.log(err);
  }
};

exports.postCart = async (req, res, next) => {
  const userID = req.user.user_id;

  try {
    // look up to see if this customer already has a cart in the database
    const cart = await Cart.findOne({ owner: userID });
    // console.log('postCart - cart');
    // console.log(cart);

    // console.log('postCart - cart.products');
    // console.log(cart.products);
    let prodArr = [];
    for (let i = 0; i < cart.products.length; i++) {
      let id = cart.products[i];

      let existingProdIndex = prodArr.findIndex((item) => item.id === id);
      if (existingProdIndex === -1) {
        prodArr.push({ id, qty: 1 });
      } else {
        id = prodArr[existingProdIndex].id;
        let qty = prodArr[existingProdIndex].qty + 1;
        prodArr[existingProdIndex] = { id, qty };
      }
    }

    // console.log('postCart - prodArr');
    // console.log(prodArr);

    let products = [];
    for (prod of prodArr) {
      let productDetails = await Product.findOne({ _id: prod.id });
      products.push({ ...prod, ...productDetails._doc });
    }

    // console.log('postCart - products');
    // console.log(products);

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found.' });
    } else {
      res.status(200).json({ products });
    }
  } catch (err) {
    console.log(err);
  }
};
