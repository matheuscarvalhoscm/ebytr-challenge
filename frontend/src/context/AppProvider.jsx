import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import api from '../services/api';

function AppProvider({ children }) {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputText, setInputText] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(async () => {
    const { data } = await api.get();

    setTaskList(data);
    setLoading(false);
  }, [taskList]);

  const contextValue = {
    taskList,
    setTaskList,
    loading,
    inputText,
    setInputText,
    sortBy,
    setSortBy,
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
