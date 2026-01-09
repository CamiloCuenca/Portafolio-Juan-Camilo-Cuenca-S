import React from 'react';
import './App.css';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Home from './pages/Home';

const MemoizedHeader = React.memo(Header);
const MemoizedFooter = React.memo(Footer);

function App() {
  return (
    <React.Fragment>
      <MemoizedHeader />
      <div className="App">
        
        <Home />
        
      </div>
      <MemoizedFooter />
    </React.Fragment>
  );
}

export default App;
