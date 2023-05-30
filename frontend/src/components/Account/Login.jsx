import { useForm } from 'react-hook-form';
import Button from '../common/Button';
import Title from '../common/Title';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthUser } from '../../redux/user/auth';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    // console.log(data);
    // dispatch(fetchAuthUser(data));

    const data = await dispatch(fetchAuthUser(values));
    if (!data.payload) {
      return;
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    } else {
      return alert('Не удалось авторизоваться');
    }
    reset();
    return data;
  };

  const { user, status } = useSelector((state) => state.userSlice);
  const { userData } = user;

  if (userData) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="w-[900px]  bg-headerBg rounded py-6">
          <div className="w-full px-4">
            <Title text="Авторизация" styles={'mb-0'} />
          </div>
          <form
            action=""
            className="flex justify-center flex-col gap-5 items-start mt-20 px-4"
            onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="введите email"
              className="w-full bg-transparent focus:outline-none border-green-700 border p-3 rounded"
              {...register('email', {
                required: 'поле обязательно для заполнения',
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
                required: 'поле обязательно для заполнения',
              })}
            />
            {(errors.password?.type === 'required' || errors.email?.type === 'pattern') && (
              <p className="text-sm text-red-500 mt-2">{errors.email.message}</p>
            )}
            <Button type="submit" text="войти" styles={'px-16'} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
