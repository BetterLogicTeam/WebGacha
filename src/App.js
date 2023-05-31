
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import LandingPage from './Components/Landing_Page/Landing_Page';
import List_f_Taprize from './Components/List_of_taprize_card/List_f_Taprize';
// import NewsSlider from './Components/news_Slider/news_Slider';


function App() {
  return (
    <div className="App">
     <Header/>
     <LandingPage/>
     <List_f_Taprize/>
     {/* <NewsSlider/> */}
    </div>
  );
}

export default App;
