import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import Button from '../common/Button';

const Header = () => {
  return (
    <div className=" bg-headerBg">
      <div className="container text-xl mx-auto flex items-center justify-between h-20">
        <Link to="/">
          <Logo />
        </Link>

        <div className="flex gap-4">
          <Button text="войти" />
          <Button text="зарегистрироваться" />
        </div>
      </div>
    </div>
  );
};

export default Header;
