import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
function App() {
  return (
    <div className="bg-appBg w-full h-screen text-textColor font-openSans">
      <Header/>
      <Routes>
        <Route path='test' element={''}/>
      </Routes>
 
    </div>
  );
}

export default App;
