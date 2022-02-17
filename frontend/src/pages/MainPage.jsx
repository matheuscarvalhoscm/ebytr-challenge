import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import Filters from '../components/Filters';

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
      <TaskList />
      <Filters />
    </Container>
  );
}

export default MainPage;
