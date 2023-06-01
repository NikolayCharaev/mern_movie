import FilmModel from '../models/Film.js';
import UserModel from '../models/User.js';

export const addFavoriteFilm = async (req, res) => {
  try {
    const { posterUrl, year, nameRu, kinopoiskId, isFavorite } = req.body;
    const userId = req.userId;
    const film = new FilmModel({
      posterUrl,
      year,
      nameRu,
      kinopoiskId,
      user: userId,
      isFavorite,
    });

    const newFilm = await film.save();
    res.json({
      message: 'Фильм успешно добавлен в избранное',
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Не удалось добавить фильм',
    });
  }
};

export const getAllFavorite = async (req, res) => {
  try {
    const userId = req.userId;
    const films = await FilmModel.find({ user: userId });

    res.json(films);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: 'Не удалось получить список фильмов',
    });
  }
};

export const removeFIlm = async (req, res) => {
  try {
    // const filmId = req.body.kinopoiskId;
    const filmId = req.params.id;

    const removeFilm = await FilmModel.findOneAndDelete({ _id: filmId });
    if (!removeFIlm) {
      return res.status(404).json({
        message: 'Фильм не найден',
      });
    }

    res.json({
      message: 'Фильм удален из списка',
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: 'Внутренняя ошибка сервера, повторите попытку позже',
    });
  }
};
