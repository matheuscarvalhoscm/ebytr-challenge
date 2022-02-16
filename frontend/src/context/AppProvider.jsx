import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import api from '../services/api';

function AppProvider({ children }) {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const { data } = await api.get();

    setTaskList(data);
    setLoading(false);
  }, []);

  const contextValue = {
    taskList,
    setTaskList,
    loading,
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
