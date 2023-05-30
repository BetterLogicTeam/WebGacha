
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Notation from './Components/Notation/Notation';
import Notation_table from './Components/Notation_table/Notation_table';
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
     <Header/>
     <Notation/>
    {/* <Notation_table /> */}
    <ContactUs />

    </div>
  );
}

export default App;
