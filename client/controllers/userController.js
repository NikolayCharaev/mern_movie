import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
  try {
    const userPassword = req.body.password;
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(userPassword, salt)
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: 'Не удалось создать пользователя',
    });
  }
};
