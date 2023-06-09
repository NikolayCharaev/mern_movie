import CommentShema from '../models/Comment.js';

export const addComment = async (req, res) => {
  try {
    const filmId = req.params.id;
    const userId = req.useRid;

    const newFilmComment = new CommentShema({
      text: req.body.text,
      user: userId,
      filmId,
    });
    const filmComment = await newFilmComment.save();
    res.json({
      message: 'Комментарий опубликован',
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: 'Не удалось добавить комментарий',
    });
  }
};

export const getAllComments = async (req, res) => {
  try {
    const filmId = req.params.id;
    const userId = req.userId;
    const allComments = await CommentShema.find({ filmId });

    res.status(200).json(allComments);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: 'Не удалось загрузить комментарии',
    });
  }
};
