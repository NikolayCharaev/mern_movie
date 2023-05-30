import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { getMe, login, register, favorite } from './controllers/userController.js';
import checkAuth from './controllers/checkAuth.js';

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.listen(process.env.PORT, () => {
  console.log('сервер запущен');
});
mongoose
  .connect(process.env.MONGO_SERVER_KEY)
  .then(() => {
    console.log('mongoose тоже запущен :)');
  })
  .catch((err) => console.log(err));

//USER
app.post('/register', register);
app.post('/login', login);
app.post('/favorite', checkAuth, favorite);
app.get('/me', checkAuth, getMe);
