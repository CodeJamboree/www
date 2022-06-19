import { createSelector } from "reselect";
import createPreferencesState from "./createPreferencesState";
import IPreferencesSlice from "./IPreferencesSlice";

const selectSlice = ({
  preferences = createPreferencesState(),
} = {}): IPreferencesSlice => preferences;

const selectById = createSelector(selectSlice, ({ byId }) => byId);

export const selectIsDarkMode = createSelector(
  selectById,
  (byId) => byId.darkMode.flagged
);
