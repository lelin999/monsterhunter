import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./index.css"

ReactDOM.render(
  <App 
    url="http://localhost:8000" 
  />, 
  document.getElementById('root')
)