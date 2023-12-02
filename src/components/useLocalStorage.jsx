import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedContacts, setStoredContacts] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedContacts));
    } catch (error) {
      console.log(error);
    }
  }, [key, storedContacts]);

  return [storedContacts, setStoredContacts];
};

export default useLocalStorage;
