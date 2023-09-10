// import packages below
import React, { Fragment, useState } from 'react';
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
import { Note } from '@/types/note-types';

const Trash: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal();

  // store
  const { trash } = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  // state
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

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
                  onSelect={setSelectedNote}
                />
              );
            })}
          />
        )}
      </Box>
      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        body={<NoteForm note={selectedNote} onClose={onClose} onReset={setSelectedNote} />}
      />
    </Fragment>
  );
};

export default Trash;
