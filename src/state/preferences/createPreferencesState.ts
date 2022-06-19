import IPreferencesSlice from "./IPreferencesSlice";
const createPreferencesState = (): IPreferencesSlice => ({
  allIds: ["darkMode"],
  byId: {
    darkMode: {
      id: "darkMode",
      flagged: false,
    },
  },
});

export default createPreferencesState;
