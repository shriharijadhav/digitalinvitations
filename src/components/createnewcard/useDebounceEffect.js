// useDebounceEffect.js
import { useEffect } from 'react';

export function useDebounceEffect(callback, delay, deps) {
  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [...(deps || []), delay]);
}
