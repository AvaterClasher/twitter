import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed.jsx';



function App() {
  return (
    <div className="app">
      <h2>TWITTER</h2>
      <h1>Hello</h1>
      <Sidebar/>
      <Feed/>
    </div>
  );
}

export default App;
