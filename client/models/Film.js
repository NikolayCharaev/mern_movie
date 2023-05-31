import mongoose from 'mongoose';

const FilmModel = new mongoose.Schema({
  kinopoiskId: {
    type: Number,
  },
  nameRu: {
    type: String,
  },
  year: {
    type: String,
  },
  posterUrl: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  isFavorite: {
    type: Boolean,
  },
});

export default mongoose.model('Films', FilmModel);
