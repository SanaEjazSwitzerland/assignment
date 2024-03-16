import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Child from './components/Child';
import FunctionalComponent from './components/FunctionalComponent';
import ParentComponent from './components/ParentComponent';
import FetchJson from './components/FetchJson';
// import Counter from './components/Counter';
import MainLayout from './components/MainLayout';
import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react';

// function App() {
//   return (
//     <div>
      
//     </div>
//   );
// }

class App extends Component {
  render() {
      return (
        <>
        <Child />
        <ParentComponent />
        <FetchJson/>
       
      <BrowserRouter> 
      <MainLayout />
      <Routes>
      <Route path="/" exact component={MainLayout} />
      <Route path="/about" component={MainLayout} />
      <Route path="/services" component={MainLayout} />
      <Route path="/contact" component={MainLayout} />
      </Routes>
      </BrowserRouter> 
        </>
      );
  }
}

export default App;
