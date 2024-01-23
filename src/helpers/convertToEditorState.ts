// packages
import { EditorState, RawDraftContentState, convertFromRaw } from 'draft-js';

const convertToEditorState = (raw: RawDraftContentState) => {
  const convertedState = convertFromRaw(raw);
  const editorState = EditorState.createWithContent(convertedState);

  return editorState;
};

export default convertToEditorState;
