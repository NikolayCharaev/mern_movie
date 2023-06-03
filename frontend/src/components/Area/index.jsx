import Button from '../common/Button';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/user/auth';
import { AiFillHeart, AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';

const PersonalArea = () => {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.userSlice);

  const { userData } = user;
  return (
    <div className="flex gap-4 items-center xs:gap-2">
      <div className="">
        <Link to="/films/search">
          <Button text={<AiOutlineSearch />} />
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
        <div className="flex items-center gap-5 xs:gap-3">
          <Link to="/films/favorites">
            <Button text={<AiFillHeart />} styles={'bg-blue-800 hover:bg-blue-900'} />
          </Link>
          <div className="font-jost flex items-center gap-4">
            {/* <AiFillHeart className='text-blue-800 text-2xl'/> */}
            <p className=" bg-blue-800 text-white  p-2 rounded ">{userData.username}</p>
          </div>
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
