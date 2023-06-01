
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import MainFooter from './Components/Main_footer/Main_footer';
import { Route, Routes } from 'react-router-dom';
import MainHome from './Components/Main_Home/Main_Home';

import LoginPage from './Components/Login_page/Login_page';
import TermOfServices from './Components/Term_of_services/Term_of_services';
import PrivacyPolicy from './Components/Privacy_policy/Privacy_policy';
import ListOTaprize from './Components/List_of_taprize_card/List_f_Taprize';
import FAQ from './Components/FAQ/FAQ';
import ContactUs from './Components/ContactUs/ContactUs';
import NotationTable from './Components/Notation_table/Notation_table';
import PasswordRequest from './Components/Password_request/Password_request';
import PaswordStepTwo from './Components/Pasword_stepTwo/Pasword_stepTwo';
import PasswordRequestStepThree from './Components/Password_request_step_three/Password_request_step_three';
import TarpizeSingleFullPage from './Components/Tarpize_single_full_page/Tarpize_single_full_page';
import Register from './Components/Register/Register';
// import NewsSlider from './Components/news_Slider/news_Slider';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/TermOfServices" element={<TermOfServices />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/ListOTaprize" element={<ListOTaprize />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/NotationTable" element={<NotationTable />} />
        <Route path="/PasswordRequest" element={<PasswordRequest />} />
        <Route path="/PaswordStepTwo" element={<PaswordStepTwo />} />
        <Route path="/PasswordRequestStepThree" element={<PasswordRequestStepThree />} />
        <Route path="/TarpizeSingleFullPage" element={<TarpizeSingleFullPage />} />








      </Routes> */}
      <Register />
      <MainFooter />
    </div>
  );
}

export default App;
