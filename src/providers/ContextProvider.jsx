import React, {
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

import {
  API_URL,
  LIGHT_THEME,
  LOCALSTORAGE_KEY,
} from '../constants';
import reducer from '../reducers/reducer';
import useFetchWithLocalStorage from '../hooks/useFetchWithLocalStorage';

export const StateContext = createContext();
export const DispatchContext = createContext();

const ContextProvider = ({ children }) => {
  const {
    error,
    isLoading,
    response,
  } = useFetchWithLocalStorage(API_URL);

  const [theme, setTheme] = useState(LIGHT_THEME);

  const [warriors, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    dispatch({ type: 'ADD_WARRIORS', payload: response });
  }, [response]);

  useEffect(() => {
    if (warriors.length) {
      window.localStorage.setItem(
        LOCALSTORAGE_KEY,
        JSON.stringify(warriors)
      );
    }
  }, [warriors]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider
        value={{
          error,
          isLoading,
          setTheme,
          theme,
          warriors,
        }}
      >
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default ContextProvider;
