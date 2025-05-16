const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const JWT_SECRET = process.env.JWT_SECRET || 'dev-only-secret';

async function registerUser({ name, email, password }) {
  try {
    const exists = await User.findOne({ where: { email } });
    if (exists) {
      return { success: false, message: 'E-mail already registered.' };
    }

    const user = await User.create({ name, email, password });

    return { success: true, user: user.toSafeJSON() };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

async function loginUser({ email, password }) {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return { success: false, message: 'Invalid credentials.' };
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return { success: false, message: 'Invalid credentials.' };
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    return { success: true, token };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

module.exports = { registerUser, loginUser };

