import { useState, useEffect } from 'react';

import {
  LOCALSTORAGE_KEY,
  MILISECONDS_IN_A_DAY,
  TIMESTAMP_KEY,
} from '../../constants';

const useFetchWithLocalStorage = (url, options = {}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const localStorageData = window.localStorage.getItem(
      LOCALSTORAGE_KEY
    );

    const localStorageTimestamp = window.localStorage.getItem(
      TIMESTAMP_KEY
    );

    const currentTime = new Date().getTime();

    const isDataOld =
      currentTime - localStorageTimestamp >
      3 * MILISECONDS_IN_A_DAY;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        if (!localStorageTimestamp || isDataOld) {
          const res = await fetch(url, options);
          const resJson = await res.json();
          setResponse(resJson);
          window.localStorage.setItem(
            LOCALSTORAGE_KEY,
            JSON.stringify(resJson)
          );
          window.localStorage.setItem(
            TIMESTAMP_KEY,
            JSON.stringify(currentTime)
          );
        } else {
          setResponse(JSON.parse(localStorageData));
          return;
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { error, isLoading, response };
};

export default useFetchWithLocalStorage;
