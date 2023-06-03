import { useState } from 'react';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/user/auth';
import { AiFillHeart, AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaWindowClose } from 'react-icons/fa';

import React from 'react';

const MobileArea = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const { user, status } = useSelector((state) => state.userSlice);
  const { userData } = user;
  return (
    <div className="relative ">
      <div className="flex gap-4 items-center">
        <div className="font-jost flex items-center gap-4">
          {/* <AiFillHeart className='text-blue-800 text-2xl'/> */}
          <p className=" bg-blue-800 text-white  p-2 rounded ">{userData && userData.username}</p>
        </div>
        {userData && (
          <Button
            text="выйти"
            onClick={() => {
              dispatch(logout());
            }}
          />
        )}

        {active ? (
          <FaWindowClose className="cursor-pointer" onClick={() => setActive(!active)} />
        ) : (
          <GiHamburgerMenu className="cursor-pointer" onClick={() => setActive(!active)} />
        )}
      </div>

      {active && (
        <div className="absolute  top-[70px] right-[-10px] w-[300px] h-[50vh] rounded z-10 bg-headerBg shadow-2xl shadow-indigo-500/40">
          <div className="flex flex-col items-center mt-10  ">
            {!userData ? (
              <div className="flex flex-col justify-center items-center gap-4 mb-4">
                <Link to="/login">
                  <Button text="войти" onClick={() => setActive(false)} />
                </Link>
                <Link to="/register">
                  <Button text="зарегистрироваться" onClick={() => setActive(false)} />
                </Link>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-5 xs:gap-3">
                <Link to="/films/favorites">
                  <Button
                    text={'избранные'}
                    styles={'bg-blue-800 hover:bg-blue-900 px-6 '}
                    onClick={() => setActive(false)}
                  />
                </Link>
              </div>
            )}
            <Link to="/films/search">
              <Button text={'поиск фильма'} onClick={() => setActive(false)} styles="mb-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileArea;
