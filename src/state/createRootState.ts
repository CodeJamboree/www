import createSettingsState from "./settings/createState";
import createPreferencesState from "./settings/createState";

const createRootState = () => ({
    preferences: createPreferencesState(),
    settings: createSettingsState()
});

export default createRootState;