
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import FAQ from './Components/FAQ/FAQ';
import Term_of_services from './Components/Term_of_services/Term_of_services';
import Privacy_policy from './Components/Privacy_policy/Privacy_policy';
import Tarpize_single from './Components/Tarpize_single/Tarpize_single';
import Tarpize_single_full_page from './Components/Tarpize_single_full_page/Tarpize_single_full_page';
import Single_tarpize_card from './Components/Single_tarpize_card/Single_tarpize_card';

function App() {
  return (
    <div className="App">
    {/* <Tarpize_single/> */}
    <Tarpize_single_full_page/>
    {/* <Single_tarpize_card/> */}
   {/* <FAQ/> */}
   {/* <Term_of_services/> */}
   {/* <Privacy_policy/> */}
    </div>
  );
}

export default App;
