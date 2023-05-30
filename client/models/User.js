import mongoose from 'mongoose';

const UserModal = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Films',
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Users', UserModal);
