const db = require('../db/_db');

module.exports = class User {
  constructor(email, hashedPassword) {
    this.email = email;
    this.hashedPassword = hashedPassword;
  }

  save() {
    db.saveUser(this);
  }

  static findByEmail(email) {
    return db.findUserByEmail(email);
  }
};
