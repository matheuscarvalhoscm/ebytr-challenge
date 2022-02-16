import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import api from '../services/api';

function AppProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(async () => {
    const { data } = await api.get();

    setTasks(data);
  }, []);

  const contextValue = {
    tasks,
    setTasks,
  };

  return (
    <AppContext.Provider value={useMemo(() => contextValue)}>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
