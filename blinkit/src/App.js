import './App.css';
import { Home } from './pages/home'
import { Checkout } from './pages/checkout'
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store.js'
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/:abc" element={<Navigate to="/home" />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route path="*" element={"Error"} />
      </Routes>
    </Provider>
  );
}

export default App;
