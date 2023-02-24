import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (stateVar, value) => {
  const[ curState, setState] = useState(value);

  updateStorage(stateVar,curState);
  return [curState,setState];
};

const updateStorage = (key, value) => {
    localStorage.setItem(key,value);
}

export default useLocalStorage;
