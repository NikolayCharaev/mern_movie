import Button from '../common/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PersonalArea = () => {
  const { user, status } = useSelector((state) => state.userSlice);
  const { userData } = user;
  console.log(userData)
  return (
    <div className="flex gap-4">
      <div className="mr-20">
        <Link to="/films/search">
          <Button text="поиск фильмов" />
        </Link>
      </div>

      {!userData ? (
        <>
          <Link to="/login">
            <Button text="войти" />
          </Link>
          <Link to="/register">
            <Button text="зарегистрироваться" />
          </Link>
        </>
      ) : (
        <div className='flex items-center gap-5'>
              <p className='font-jost bg-blue-800 text-white  p-2 rounded '>{userData.username}</p>
               <Button text="выйти" />

        </div>
      )}
    </div>
  );
};

export default PersonalArea;
