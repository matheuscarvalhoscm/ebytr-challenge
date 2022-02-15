import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AddTask from '../components/AddTask';

function MainPage() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h2">
        Too Doo
      </Typography>
      <AddTask />
    </Container>
  );
}

export default MainPage;
