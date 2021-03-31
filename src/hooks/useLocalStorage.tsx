/* eslint-disable no-console */
import { useState } from 'react';

/**
 * Sync state to local storage so that it persists through a page refresh. Usage
 * is similar to useState except we pass in a local storage key so that we can
 * default to that value on page load instead of the specified initial value.
 *
 * @param key - The key in local storage.
 * @param initialValue - he initial value for key.
 * @returns Returns a stateful value, and a function to update it.
 */
export default function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
