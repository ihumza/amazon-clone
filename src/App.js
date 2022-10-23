import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            } />
          <Route path="/login"
            element={
              <>
                <Header />
                <Login />
              </>
            } />
          <Route path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
