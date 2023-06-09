import { useEffect } from 'react';
import Button from '../common/Button';
import Title from '../common/Title';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { fetchAddComment, fetchAllComments } from '../../redux/comments/commentSlice';

import { useForm } from 'react-hook-form';

const Comments = () => {
  const dispatch = useDispatch();

  const { kinopoiskId } = useSelector((state) => state.movieInfo.movieData.film);
  const { userData } = useSelector((state) => state.userSlice.user);
  const { items } = useSelector((state) => state.comments.allComments);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const OnSubmit = async (data) => {
    if (!userData) {
      reset();
      return toast.error('авторизируйтесь для комментирования фильмов');
    }
    const { text } = data;
    await dispatch(fetchAddComment({ comment: text, id: kinopoiskId }));
    toast.success('комментарий опубликован');
    dispatch(fetchAllComments(kinopoiskId));

    reset();
  };

  useEffect(() => {
    dispatch(fetchAllComments(kinopoiskId));
  }, [dispatch, kinopoiskId]);

  return (
    <div>
      <Title text={'Комментарии к фильму'} />
      <div className="overflow-scroll max-h-[400px] flex flex-col ">
        {items.length <= 0 && (
          <p className="text-xs">Тут пока ничего нет, оставьте комментарий первым :)</p>
        )}
        {items.map((comment) => {
          const { text, commentDate } = comment;
          console.log(comment);
          const { username } = comment.userInfo;
          return (
            <>
              <div className="p-2 rounded mb-5 relative inline-block bg-headerBg ">
                <div className="absolute top-2 left-2 text-xs flex gap-2 p-2 bg-emerald-950 rounded">
                  <p className="">{username}</p>
                  <p className="">{commentDate}</p>
                </div>
                <p className="text-sm mt-10  inline-block">{text}</p>
              </div>
            </>
          );
        })}
      </div>

      <form action="" className="flex flex-col gap-5 mt-10" onSubmit={handleSubmit(OnSubmit)}>
        <textarea
          rows={5}
          type="text"
          className="w-full bg-transparent focus:outline-none border-green-700 border p-3 rounded"
          placeholder="текст комментария"
          {...register('text', {
            required: 'Поле обязательно для заполнения',
          })}
        />
        {errors.text?.type === 'required' && (
          <p className="text-sm text-red-500 mt-2">введите комментарий</p>
        )}
        <Button type="submit" text="добавить комментарий" styles={'inline-block w-52'} />
      </form>
    </div>
  );
};

export default Comments;
