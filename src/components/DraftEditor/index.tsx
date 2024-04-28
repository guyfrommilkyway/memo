// packages
import React from 'react';
import { Box } from '@chakra-ui/react';
import { Editor, EditorState } from 'draft-js';

interface Props {
  editorState: EditorState;
  onChange: React.Dispatch<React.SetStateAction<EditorState>>;
}

const DraftEditor: React.FC<Props> = ({ editorState, onChange }) => {
  return (
    <Box mt='sm' mb='md' p='sm' border='1px solid #676767' rounded='lg'>
      <Editor editorState={editorState} onChange={onChange} />
    </Box>
  );
};

export default DraftEditor;
