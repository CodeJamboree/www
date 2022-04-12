import { handleActions } from 'redux-actions';
import produce from 'immer';
import * as actions from './actions';
import createState from './createState';

const initialState = createState();

const onToggleDarkMode = produce((draft, action) => {
  draft.isDarkMode = !draft.isDarkMode;
});

const onChangeDarkModePreference = produce((draft, action) => {
  draft.isDarkMode = action.payload;
});

export default handleActions(
  {
    [actions.toggleDarkMode.TRIGGER]: onToggleDarkMode,
    [actions.changeDarkModePreference.TRIGGER]: onChangeDarkModePreference,
  },
  initialState
);