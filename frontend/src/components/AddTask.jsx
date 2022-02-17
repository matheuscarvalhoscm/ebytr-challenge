import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppContext from '../context/AppContext';
import api from '../services/api';

function AddTask() {
  const { inputText, setInputText } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setInputText(value);
  };

  const handleClick = async () => {
    const newTask = {
      task: inputText,
    };

    await api.post('http://localhost:3001/', newTask);
    setInputText('');
  };

  return (
    <Box component="section">
      <TextField size="small" value={inputText} onChange={handleChange} />
      <Button sx={{ marginLeft: '15px' }} variant="contained" onClick={handleClick}>
        Add task
      </Button>
    </Box>
  );
}

export default AddTask;
