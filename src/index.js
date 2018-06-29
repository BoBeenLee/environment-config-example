import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import dotenv from 'dotenv';

dotenv.config({
    path: `.env.${process.env.REACT_APP_ENV}`,
    encoding: "utf8"
});

console.log(`${process.env.REACT_APP_API_URL}`);

ReactDOM.render(<App />, document.getElementById('root'));
