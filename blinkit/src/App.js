import './App.css';
import Header from './Components/Header/header.Module.js';
import Navbar from './Components/Navbar/Navbar.Module.js';
import Footer from './Components/Footer/Footer.Module.js';
import Listing from './Components/Listing/Listing';

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
