import React, { useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import AppContext from '../context/AppContext';
import api from '../services/api';

function TaskList() {
  const { taskList, loading } = useContext(AppContext);
  const colors = {
    Pendente: '#e33434',
    Desenvolvimento: '#ab911b',
    Concluido: '#54e334',
  };

  const handleDelete = async (id) => {
    await api.delete(`http://localhost:3001/${id}`);
  };

  const handleUpdate = (id) => {
    console.log(id);
  };

  if (loading) return <CircularProgress />;

  return (
    <List sx={{ width: '70%' }}>
      {taskList.map(({
        _id: id, task, status, createdAt,
      }, index) => (
        <ListItem
          sx={{ boxShadow: '0px 0px 2px #9E9E9E', margin: '5px' }}
          key={id}
          id={index}
        >
          <ListItemIcon>
            <Checkbox edge="start" />
          </ListItemIcon>
          <ListItemText
            primary={task}
            secondary={(
              <Box component="span" sx={{ color: colors[status] }}>
                {status}
              </Box>
            )}
          />
          <span>{createdAt.substring(0, 11)}</span>
          <IconButton
            sx={{ margin: '5px' }}
            edge="end"
            onClick={() => handleUpdate(id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton edge="end" onClick={() => handleDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default TaskList;
