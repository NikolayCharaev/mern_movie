import React from 'react';
import Button from '../common/Button';
import Title from '../common/Title';
import { useDispatch, useSelector } from 'react-redux';

import dayjs from 'dayjs';
import { fetchAddComment } from '../../redux/comments/commentSlice';

import { useForm } from 'react-hook-form';

const Comments = () => {
  const dispatch = useDispatch();
  const { kinopoiskId } = useSelector((state) => state.movieInfo.movieData.film);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const OnSubmit = (data) => {
    const { text } = data;
    dispatch(fetchAddComment({ comment: text, id: kinopoiskId }));
  };
  
  return (
    <div>
      <Title text={'Комментарии к фильму'} />
      <div className=""></div>

      <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit(OnSubmit)}>
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
