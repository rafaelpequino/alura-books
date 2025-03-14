import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Favoritos from './routes/Favoritos';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;
  }

  a {
    color: #000;
    text-decoration: none;
  }

`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
