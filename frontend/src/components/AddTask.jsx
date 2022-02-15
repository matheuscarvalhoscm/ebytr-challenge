import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddTask() {
  return (
    <Box variant="section">
      <TextField size="small" />
      <Button variant="outlined">
        Add task
      </Button>
    </Box>
  );
}

export default AddTask;
