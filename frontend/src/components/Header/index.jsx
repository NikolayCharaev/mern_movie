import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import PersonalArea from '../Area';

const Header = () => {
  return (
    <div className=" bg-headerBg ">
      <div className="container  text-xl mx-auto flex items-center justify-between h-20 md:text-lg md:px-4 xs:text-sm">
        <Link to="/">
          <Logo />
        </Link>

        <PersonalArea />
      </div>
    </div>
  );
};

export default Header;
