import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppContext from '../context/AppContext';

function Filters() {
  const { setSortBy } = useContext(AppContext);
  const sortOptions = ['Data', 'Nome', 'Pendente', 'Desenvolvimento', 'Concluído'];
  const colors = {
    Pendente: '#e33434',
    Desenvolvimento: '#e6bc05',
    Concluído: '#449c2c',
  };
  const randomKey = new Date();

  const handleSortSelection = ({ target }) => {
    const { value } = target;
    setSortBy(value);
  };

  return (
    <Box component="section">
      <p>Ordenar por:</p>
      {
        sortOptions.map((option) => (
          <Button
            sx={{ marginRight: '10px', backgroundColor: colors[option] }}
            value={option}
            variant="contained"
            key={option + randomKey}
            onClick={handleSortSelection}
          >
            {option}
          </Button>
        ))
      }
    </Box>
  );
}

export default Filters;
