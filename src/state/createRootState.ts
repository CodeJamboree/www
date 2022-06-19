import createSettingsState from "./settings/createState";
import createPreferencesState from "./settings/createState";
import createMediaState from "./media/createMediaState";

const createRootState = () => ({
  preferences: createPreferencesState(),
  settings: createSettingsState(),
  media: createMediaState(),
});

export default createRootState;
