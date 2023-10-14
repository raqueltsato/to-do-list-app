import { useEffect, useRef } from "react";

export const useDebounce = (callback: () => void, delay: number = 500) => {
  const ref = useRef(0);

  useEffect(() => {
    clearTimeout(ref.current);

    ref.current = setTimeout(() => {
      callback();
    }, delay);
  }, [callback, delay]);
};
