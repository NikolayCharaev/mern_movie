import mongoose from 'mongoose';

const CommentShema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
    filmId: String,
  },
  { timestamps: true },
);

export default mongoose.model('Comments', CommentShema);
