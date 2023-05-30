
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import LandingPage from './Components/Landing_Page/Landing_Page';
import NewsSlider from './Components/news_Slider/news_Slider';


function App() {
  return (
    <div className="App">
     <Header/>
     <LandingPage/>
     <NewsSlider/>
    </div>
  );
}

export default App;
