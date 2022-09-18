import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';

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
                <h1>Login Page</h1>
              </>
            } />
          <Route path="/checkout"
            element={
              <>
                <Header />
                <h1>Checkout Page</h1>
              </>
            } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
