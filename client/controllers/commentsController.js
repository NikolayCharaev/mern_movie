import CommentShema from '../models/Comment.js';

import UserModal from '../models/User.js';

export const addComment = async (req, res) => {
  try {
    const filmId = req.params.id;
    const userId = req.userId;

    const user = await UserModal.findById({ _id: userId });
    const { password, createdAt, updatedAt, _id, ...userData } = user._doc;
    console.log('userData', userData);

    const newFilmComment = new CommentShema({
      text: req.body.text,
      userId,
      userInfo: userData,
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
