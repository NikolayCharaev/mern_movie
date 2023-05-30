import Button from '../common/Button';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/user/auth';
import { AiFillHeart } from 'react-icons/ai';

const PersonalArea = () => {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.userSlice);
  const { userData } = user;
  return (
    <div className="flex gap-4">
      <div className="mr-20 ">
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
        <div className="flex items-center gap-5">
          <div className="font-jost flex items-center gap-4">
            {/* <AiFillHeart className='text-blue-800 text-2xl'/> */}
            <p className=" bg-blue-800 text-white  p-2 rounded ">{userData.username}</p>
          </div>

        <Link to='/films/favorites'>
            <Button text='избранное' styles={'bg-blue-800 hover:bg-blue-900'}/>
        </Link>
          <Button
            text="выйти"
            onClick={() => {
              dispatch(logout());
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PersonalArea;
