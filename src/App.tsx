import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import LoginScreen from './components/views/LoginScreen';
import AppRouter from './routers/AppRouter';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
}

export default App;
