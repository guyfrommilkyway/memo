// packages
import { useState } from 'react';

const useSelect = () => {
  const [selected, setSelected] = useState<Note | null>(null);

  const selectHandler = (note: Note | null) => setSelected(note);

  const clearSelectHandler = () => setSelected(null);

  return { selected, selectHandler, clearSelectHandler };
};

export default useSelect;
