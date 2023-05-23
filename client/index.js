import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
app.use(express.json());
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
