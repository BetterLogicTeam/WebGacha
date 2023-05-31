
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import MainFooter from './Components/Main_footer/Main_footer';
import { Route, Routes } from 'react-router-dom';
import MainHome from './Components/Main_Home/Main_Home';

import LoginPage from './Components/Login_page/Login_page';
// import NewsSlider from './Components/news_Slider/news_Slider';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/Login" element={<LoginPage />} />



      </Routes>



      <MainFooter />
    </div>
  );
}

export default App;
