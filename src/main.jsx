import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';
import BlogCard from './components/BlogCard/BlogCard.jsx'
import Statistics from './components/Statistics/Statistics.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <BlogCard BlogCard ={BlogCard} />
    <Statistics />
  </React.StrictMode>,
);
