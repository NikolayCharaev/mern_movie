import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModal from '../models/User.js';
import FilmModal from '../models/Film.js'

export const register = async (req, res) => {
  try {
    const userPassword = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(userPassword, salt);

    const doc = new UserModal({
      email: req.body.email,
      password: passwordHash,
      username: req.body.username,
    });

    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret123',
      {
        expiresIn: '30d',
      },
    );

    const { password, ...userData } = user._doc;
    res.json({ userData, token });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: 'Не удалось создать пользователя',
    });
  }
};

export const login = async (req, res) => {
  try {
    const user = await UserModal.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(404).json({
        message: 'Не удалось найти пользователя',
      });
    }
    const validPassword = await bcrypt.compare(req.body.password, user._doc.password);
    if (!validPassword) {
      return res.status(400).json({
        message: 'Неверный логин или пароль',
      });
    }
    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret123',
      {
        expiresIn: '30d',
      },
    );
    const { password, ...userData } = user._doc;
    res.json({
      userData,
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: 'Не удалось авторизоваться',
    });
  }
};

export const getMe = async (req, res, next) => {
  try {
    const user = await UserModal.findById(req.userId);
    if (!user) {
      return res.status(404).json({
        message: 'Не удалось найти пользователя',
      });
    }
    const { password, ...userData } = user._doc;
    res.json({
      userData,
    });
  } catch (err) {
    console.log(err);
  }
};
