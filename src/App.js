
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
import PurchaseListFullPage from './Components/Purchase_list_full_page/Purchase_list_full_page';
import PurchaseProcess1 from './Components/Purchase_process_1/Purchase_process_1';
import Purchase_process_2 from './Components/Purchase_process_2/Purchase_process_2';
import PurchaseProcessOne from './Components/Purchase_process_one/Purchase_process_one';
import PasswordRequestStepFour from './Components/Password_request_step_four/Password_request_step_four';
import PurchaseTab from './Components/Purchase_Tab/Purchase_Tab';
import Register from './Components/Register/Register';
import RegisterationTab from './Components/Registeration_tab/Registeration_tab';
import MyPageEdit1 from './Components/MyPageEdit_1/MyPageEdit_1';
import EditPageTwo from './Components/Edit_page_two/Edit_page_two';
import MyPageEditThree from './Components/MyPageEditThree/MyPageEditThree';
import CouponTab from './Components/CouponTab/CouponTab';
import ListOfResults from './Components/List_of_Results/List_of_Results';
import ShippingStatusDetails from './Components/Shipping_status_Details/Shipping_status_Details';
// import NewsSlider from './Components/news_Slider/news_Slider';


function App() {
  return (
    <div className="App">


      <Header />
    

      <Routes>
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
        <Route path="/PasswordRequestStepFour" element={<PasswordRequestStepFour />} />
        <Route path="/TarpizeSingleFullPage" element={<TarpizeSingleFullPage />} />
        <Route path="/PurchaseProcess1" element={<PurchaseProcess1 />} />
        <Route path="/PurchaseProcessOne" element={<PurchaseProcessOne />} />
        <Route path="/PurchaseTab" element={<PurchaseTab />} />
        <Route path="/PurchaseListFullPage" element={<PurchaseListFullPage />} />
        <Route path="/RegisterationTab" element={<RegisterationTab />} />
        <Route path="/MyPageEdit1" element={<MyPageEdit1 />} />
        <Route path="/EditPageTwo" element={<EditPageTwo />} />
        <Route path="/MyPageEditThree" element={<MyPageEditThree />} />
        <Route path="/CouponTab" element={<CouponTab />} />
        <Route path="/ListOfResults" element={<ListOfResults />} />
        <Route path="/ShippingStatusDetails" element={<ShippingStatusDetails />} />



        








      </Routes> 
  
   

      
      
      <MainFooter />
    </div>
  );
}

export default App;
