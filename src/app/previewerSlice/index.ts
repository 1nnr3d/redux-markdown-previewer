import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface PreviewerState {
  text: {
    currentText: string,
    exampleText: string
  },
  isShowExample: boolean
}

const initialState: PreviewerState = {
  text: {
    currentText: "",
    exampleText: `Heading
=======
Sub-heading
-----------
### Another deeper heading
Paragraphs are separated
by a blank line.
Leave 2 spaces at the end of a line to do a
line break
Text attributes *italic*, **bold**,
Shopping list:
  * apples
  * oranges
  * pears
Numbered list:
  1. apples
  2. oranges
  3. pears
 *[1nnr3d](https://github.com/1nnr3d)*`
  },
  isShowExample: false // Example Text Status
}

export const previewerSlice = createSlice({
  name: 'previewer',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text.currentText = action.payload; // Set Text
    },
    setShowExample: (state, action: PayloadAction<boolean>) => {
      state.isShowExample = action.payload; // Set Example Text Status
    }
  }
});

export const { setText, setShowExample } = previewerSlice.actions;

export const getText = (state: RootState) => state.previewer.text.currentText; // Get text selector
export const getExampleText = (state: RootState) => state.previewer.text.exampleText; // Get example text selector
export const getShowExample = (state: RootState) => state.previewer.isShowExample; // Get example text status selector

export default previewerSlice.reducer;