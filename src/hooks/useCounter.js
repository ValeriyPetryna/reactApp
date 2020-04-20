import { useState, useEffect } from "react";

export function useCounter () {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => { 
      setCounter(counter + 1)
    }, 500);
    return () => { 
      clearTimeout(timer);
    }
  }, [counter])

  return counter;
}
