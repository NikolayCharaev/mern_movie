import React from 'react';

import { useForm } from 'react-hook-form';
import Button from '../common/Button';
import Title from '../common/Title';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen ">
        <div className="w-[900px]  bg-headerBg rounded py-6">
          <div className="w-full px-4">
            <Title text="Регистрация" styles={' mb-0'} />
          </div>
          <form
            action=""
            className="flex justify-center flex-col gap-5 items-start mt-20 px-4"
            onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="введите имя пользователя"
              className="w-full bg-transparent focus:outline-none border-green-700 border p-3 rounded"
              {...register('username', {
                required: 'Поле обязательно для заполнения',
              })}
            />
            {(errors.username?.type === 'required' || errors.email?.type === 'pattern') && (
              <p className="text-sm text-red-500 mt-2">{errors.email.message}</p>
            )}
            <input
              type="email"
              placeholder="введите email"
              className="w-full bg-transparent focus:outline-none border-green-700 border p-3 rounded"
              {...register('email', {
                required: 'Поле обязательно для заполнения',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'введите корректный email',
                },
              })}
            />
            {(errors.email?.type === 'required' || errors.email?.type === 'pattern') && (
              <p className="text-sm text-red-500 mt-2">{errors.email.message}</p>
            )}
            <input
              type="password"
              placeholder="введите пароль"
              className="w-full bg-transparent focus:outline-none border-green-700 border p-3 rounded"
              {...register('password', {
                required: 'Поле password обязательно для заполнения',
                minLength: {
                  value: 4,
                  message: 'пароль должен быть не менее 4 символов',
                },
              })}
            />
            {(errors.password?.type === 'required' || errors.password?.type === 'minLength') && (
              <p className="text-sm text-red-500 mt-2">{errors.password.message}</p>
            )}
            <Button type="submit" text="зарегистрироваться" styles={'px-16'} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
