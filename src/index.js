import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import 'remixicon/fonts/remixicon.css';
import { color, flex, positionAbsoluteCenter } from './styles/theme';
import { GlobalStlye } from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStlye />
    <ThemeProvider theme={{ color, flex, positionAbsoluteCenter }}>
      <Router />
    </ThemeProvider>
  </>
);
