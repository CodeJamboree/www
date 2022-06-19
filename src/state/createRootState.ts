import createSettingsState from "./settings/createState";
import createPreferencesState from "./preferences/createPreferencesState";
import createMediaState from "./media/createMediaState";

const createRootState = () => ({
  preferences: createPreferencesState(),
  settings: createSettingsState(),
  media: createMediaState(),
});

export default createRootState;
