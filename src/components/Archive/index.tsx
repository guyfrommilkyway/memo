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
import { unarchive, move } from '@/features/notes/notes-slice';

// import utils below
import useModal from '@/hooks/useModal';
import useSelect from '@/hooks/useSelect';

const Archive: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal();
  const { selected, selectHandler, clearSelectHandler } = useSelect();

  // store
  const { archive } = useAppSelector(state => state.notes);
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
        {archive.length > 0 && (
          <NotesList
            render={archive.map(note => {
              return (
                <NoteItem
                  key={note.id}
                  note={note}
                  onOpen={onOpen}
                  onUnarchive={() => dispatch(unarchive({ data: note }))}
                  onRemove={() => dispatch(move({ from: 'ARCHIVE', data: note }))}
                  onSelect={selectHandler}
                />
              );
            })}
          />
        )}
      </Box>
      <CustomModal isOpen={isOpen} onClose={closeHandler} body={<NoteForm note={selected} onClose={closeHandler} />} />
    </Fragment>
  );
};

export default Archive;
