
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config'); 

module.exports = {
  generateToken: (user) => {
    const payload = {
      userId: user._id,
      username: user.username,
      isAdmin: user.isAdmin, 
    };

    
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
    return token;
  },
};
