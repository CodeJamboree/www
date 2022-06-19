import { Action, handleActions } from "redux-actions";
import produce from "immer";
import * as actions from "./actions";
import createPreferencesState from "./createPreferencesState";
import IPreferencesSlice from "./IPreferencesSlice";

const initialState = createPreferencesState();

const onToggleDarkMode = produce<IPreferencesSlice>((draft) => {
  draft.byId.darkMode.flagged = !draft.byId.darkMode.flagged;
});

const onChangeDarkModePreference = produce<
  IPreferencesSlice,
  Action<boolean>[]
>((draft, action) => {
  draft.byId.darkMode.flagged = action.payload;
});

const reducer = handleActions<IPreferencesSlice, any>(
  {
    [actions.toggleDarkMode.TRIGGER]: onToggleDarkMode,
    [actions.changeDarkModePreference.TRIGGER]: onChangeDarkModePreference,
  },
  initialState
);

export default reducer;
