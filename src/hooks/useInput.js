import { useState } from 'react';

function useInput(defaulValue = '') {
  const [value, setValue] = useState(defaulValue);

  function onValueChange({ target }) {
    setValue(target.value);
  }

  return [value, onValueChange, setValue];
}

export default useInput;
