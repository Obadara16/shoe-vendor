
const Admin = require('../models/Admin');
const { generateToken } = require('../helpers/authentication');

module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;

    try {
      const admin = await Admin.findOne({ username });

      if (!admin) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      admin.comparePassword(password, (err, isMatch) => {
        if (err || !isMatch) {
          return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = generateToken(admin);
        res.json({ token });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },
};
