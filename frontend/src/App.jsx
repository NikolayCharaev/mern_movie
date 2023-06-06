import { Routes, Route } from 'react-router-dom';
import FullCard from './components/FullCard';
import Header from './components/Header';
import Home from './components/Home';
import Loading from './components/common/Loading';
import OneActorItem from './components/CardItem/ActorsInfo/OneActorItem';
import SearchFilms from './components/SearchFilm';
import { useSelector } from 'react-redux';
import Register from './components/Account/Register';
import Login from './components/Account/Login';
import Favorites from './components/Favorites';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function App() {
  const loading = useSelector((state) => state.globalLoading.loading);
  return (
    <div className="bg-appBg w-full h-full min-h-screen text-textColor font-openSans ">
      <Header />
      <div className="container mx-auto md:px-4">
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films/search" element={<SearchFilms />} />
          <Route path="/:id" element={loading ? <Loading /> : <FullCard />} />
          <Route path="/actor/:id" element={loading ? <Loading /> : <OneActorItem />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/films/favorites" element={<Favorites />} />
        </Routes>
        </SkeletonTheme>
      </div>
    </div>
  );
}

export default App;
