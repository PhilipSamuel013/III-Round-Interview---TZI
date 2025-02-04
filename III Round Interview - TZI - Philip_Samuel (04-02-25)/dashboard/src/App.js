import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './styles.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Header />
      <div class="main-container">
      <Nav />
      <Main />
      </div>
    </div>
  );
}

export default App;





