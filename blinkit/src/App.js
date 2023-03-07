import './App.css';
import Header from './Components/header.js';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Listing from './Components/Listing';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
     <Listing/>
     <Footer/>
    </div>
  );
}

export default App;
