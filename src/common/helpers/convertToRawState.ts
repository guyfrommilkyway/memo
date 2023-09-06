// import packages below
import { EditorState, convertToRaw } from 'draft-js';

const convertToRawState = (state: EditorState) => {
  const contentState = state.getCurrentContent();
  const raw = convertToRaw(contentState);

  return raw;
};

export default convertToRawState;
