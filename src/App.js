
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import LandingPage from './Components/Landing_Page/Landing_Page';
import Login_page from './Components/Login_page/Login_page';
import Tarpize_single_full_page from './Components/Tarpize_single_full_page/Tarpize_single_full_page';
import Password_request_step_three from './Components/Password_request_step_three/Password_request_step_three';
import Password_request_step_four from './Components/Password_request_step_four/Password_request_step_four';
import News_Slider from './Components/news_Slider/news_Slider';
import Edit_page_two from './Components/Edit_page_two/Edit_page_two';
import Register_page_3 from './Components/Register_page_3/Register_page_3';
import Register_complete from './Components/Register_complete/Register_complete';
import Web_part from './Components/Web_part/Web_part';
import Upper_footer_part from './Components/Upper_footer_part/Upper_footer_part';



function App() {
  return (
    <div className="App">
   {/* <Tarpize_single_full_page/> */}
   {/* <Login_page/> */}
   {/* <News_Slider/> */}
   {/* <Password_request_step_three/> */}
   {/* <Password_request_step_four/> */}
   {/* <Edit_page_two/> */}
   <Register_page_3/>
   <Register_complete/>
   <Web_part/>
   <Upper_footer_part/>
  
    </div>
  );
}

export default App;
