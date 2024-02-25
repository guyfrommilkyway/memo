// packages
import { useState } from 'react';

const useToggle = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  const toggleHandler = (param?: boolean) => setToggle(prev => param ?? !prev);

  return { toggle, toggleHandler };
};

export default useToggle;
