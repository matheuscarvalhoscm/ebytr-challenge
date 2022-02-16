import React from 'react';
import Container from '@mui/material/Container';
import MainPage from './pages/MainPage';
import AppProvider from './context/AppProvider.jsx';

function App() {
  return (
    <AppProvider>
      <Container>
        <MainPage />
      </Container>
    </AppProvider>
  );
}

export default App;
