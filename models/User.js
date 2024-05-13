class User {
  constructor(email, username, password, preferences = {}) {
      this.email = email;
      this.username = username;
      this.password = password;
      this.preferences = preferences;
  }
}

module.exports = User;

