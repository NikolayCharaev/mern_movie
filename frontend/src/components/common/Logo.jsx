import { useDispatch } from "react-redux";
import { setClearFilms } from "../../redux/features/searchFilm";
const Logo = () => {
  const dispatch = useDispatch()

  return (
    <div className="rounded p-2 cursor-pointer border flex xs:p-1" onClick={() => { 
      dispatch(setClearFilms())
    }}>
      <p className="font-jost">Movie</p>
      <span className="text-red-500">Land</span>
    </div>
  );
};

export default Logo;
