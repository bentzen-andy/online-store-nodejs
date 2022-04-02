const db = require('../db/db');

module.exports = class Product {
  constructor(
    name,
    category,
    imageUrl,
    description,
    price,
    notes,
    numberInStock
  ) {
    this.name = name;
    this.slug = name.toLowerCase().replace(' ', '-');
    this.category = category;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.notes = notes;
    this.numberInStock = numberInStock;
  }

  static fetchAll() {
    return db.getProducts();
  }
};
