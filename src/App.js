
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import LandingPage from './Components/Landing_Page/Landing_Page';
import NewsSlider from './Components/news_Slider/news_Slider';
import List_of_Results from './Components/List_of_Results/List_of_Results';
import Shipping_status_Details from './Components/Shipping_status_Details/Shipping_status_Details';


function App() {
  return (
    <div className="App">
     <Header/>
     {/* <LandingPage/>
     <NewsSlider/> */}
     {/* <List_of_Results /> */}
     <Shipping_status_Details />
    </div>
  );
}

export default App;
