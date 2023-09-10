// import packages below
import React, { Fragment, useCallback } from 'react';
import { Box } from '@chakra-ui/react';

// import components below
import NotesList from '@/components/Notes/components/NotesList';
import NoteItem from '@/components/Notes/components/NoteItem';
const NoteForm = React.lazy(() => import('@/components/Notes/components/NoteForm'));
const CustomModal = React.lazy(() => import('@/components/Modal'));

// import helpers below
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { restore, remove } from '@/features/notes/notes-slice';

// import utils below
import useModal from '@/hooks/useModal';
import useSelect from '@/hooks/useSelect';

const Trash: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal();
  const { selected, selectHandler, clearSelectHandler } = useSelect();

  // store
  const { trash } = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  // close modal handler
  const closeHandler = useCallback(() => {
    clearSelectHandler();
    onClose();
    return;
  }, [clearSelectHandler, onClose]);

  return (
    <Fragment>
      <Box className='note'>
        {trash.length > 0 && (
          <NotesList
            render={trash.map(note => {
              return (
                <NoteItem
                  key={note.id}
                  note={note}
                  onOpen={onOpen}
                  onRestore={() => dispatch(restore({ data: note }))}
                  onRemove={() => dispatch(remove({ id: note.id }))}
                  onSelect={selectHandler}
                />
              );
            })}
          />
        )}
      </Box>
      <CustomModal isOpen={isOpen} onClose={onClose} body={<NoteForm note={selected} onClose={closeHandler} />} />
    </Fragment>
  );
};

export default Trash;
