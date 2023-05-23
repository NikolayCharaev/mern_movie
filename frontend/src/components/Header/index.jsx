import { HiFilm } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Button from '../custom/Button';

const Header = () => {
  return (
    <div className=" bg-headerBg">
      <div className="container text-xl mx-auto flex items-center justify-between h-20">
        <Link to="/">
          <div className="rounded p-2 cursor-pointer border">
            <p className='font-jost'>MovieLand</p>
          </div>
        </Link>

        <div className="flex gap-4">
            <Button text='войти'/>
            <Button text='зарегистрироваться'/>
        </div>
      </div>
    </div>
  );
};

export default Header;
