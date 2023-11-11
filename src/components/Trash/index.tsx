// packages
import React, { Fragment } from 'react';
import { Box } from '@chakra-ui/react';

// components
import NotesList from '@/components/Notes/components/NotesList';
import NoteItem from '@/components/Notes/components/NoteItem';
import NoteForm from '@/components/Notes/components/NoteForm';
import CustomModal from '@/components/Modal';

// helpers
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { restore, remove } from '@/features/notes/notes-slice';

// utils
import useModal from '@/hooks/useModal';
import useSelect from '@/hooks/useSelect';
import { toastSuccess } from '@/utils/notifications';

const Trash: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal();
  const { selected, selectHandler, clearSelectHandler } = useSelect();

  // store
  const { trash } = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  // archive handler
  const restoreHandler = (data: Note) => {
    dispatch(restore({ data }));
    toastSuccess('Note restored');
  };

  // remove handler
  const removeHandler = (id: string) => {
    dispatch(remove({ id }));
    toastSuccess('Note removed');
  };

  // close modal handler
  const closeHandler = () => {
    clearSelectHandler();
    onClose();
  };

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
                  onRestore={() => restoreHandler(note)}
                  onRemove={() => removeHandler(note.id)}
                  onSelect={selectHandler}
                />
              );
            })}
          />
        )}
      </Box>
      <CustomModal
        isOpen={isOpen}
        onClose={closeHandler}
        body={<NoteForm note={selected} onClose={closeHandler} />}
      />
    </Fragment>
  );
};

export default Trash;
