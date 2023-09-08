// import packages below
import React, { Fragment, useState } from 'react';
import { Box } from '@chakra-ui/react';

// import components below
import NoteHeader from '@/common/components/Notes/components/NoteHeader';
import NotesList from '@/common/components/Notes/components/NotesList';
import NoteItem from '@/common/components/Notes/components/NoteItem';
const NoteForm = React.lazy(() => import('@/common/components/Notes/components/NoteForm'));
const CustomModal = React.lazy(() => import('@/common/components/Modal'));

// import helpers below
import { useAppDispatch, useAppSelector } from '@/common/hooks/redux';
import { move } from '@/features/notes/notes-slice';

// import utils below
import useModal from '@/common/hooks/useModal';
import { Note } from '@/common/utils/note-types';

const Notes: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal();

  // store
  const { notes } = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  // state
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  return (
    <Fragment>
      <Box className='note'>
        <NoteHeader onOpen={onOpen} />
        {notes.length > 0 && (
          <NotesList
            render={notes.map(note => {
              return (
                <NoteItem
                  key={note.id}
                  note={note}
                  onOpen={onOpen}
                  onRemove={(id: string) => dispatch(move(id))}
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

export default Notes;
