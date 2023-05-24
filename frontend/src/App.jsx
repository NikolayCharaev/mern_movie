import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
function App() {
  return (
    <div className="bg-appBg w-full h-full min-h-screen text-textColor font-openSans">
             <Header />
      <div className="container mx-auto">
 
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
