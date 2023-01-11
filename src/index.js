import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from "./pages/store"; // 직접 만든 store import
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'; // 반응형 styled-components 감싸기
import theme from './style/theme'; // 직접 만든 theme import
import GlobalStyle from './style/global'; //전역에 css

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <App /> 
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
