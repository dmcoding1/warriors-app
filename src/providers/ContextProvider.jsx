import React, {
  createContext,
  useEffect,
  useReducer,
} from 'react';

import { API_URL, LOCALSTORAGE_KEY } from '../constants';
import reducer from '../reducers/reducer';
import useFetchWithLocalStorage from '../hooks/useFetchWithLocalStorage';

const StateContext = createContext();
const DispatchContext = createContext();

const ContextProvider = ({ children }) => {
  const {
    error,
    isLoading,
    response,
  } = useFetchWithLocalStorage(API_URL);

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
        value={(error, isLoading, warriors)}
      >
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default ContextProvider;
