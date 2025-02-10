import React from 'react';
import './App.css';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Home from './pages/Home';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
