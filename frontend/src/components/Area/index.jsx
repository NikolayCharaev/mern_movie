import Button from '../common/Button';
import { Link } from 'react-router-dom';

const PersonalArea = () => {
  return (
    <div className="flex gap-4">
      <div className="mr-20">
        <Link to="/films/search">
          <Button text="поиск фильмов" />
        </Link>
      </div>

      <Link to="/login">
        <Button text="войти" />
      </Link>
      <Link to="/register">
        <Button text="зарегистрироваться" />
      </Link>
    </div>
  );
};

export default PersonalArea;
