import React from "react";
import './index.css'
import ReactDom from 'react-dom/client'
import MovieList from './MovieList';
const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <MovieList/>
)