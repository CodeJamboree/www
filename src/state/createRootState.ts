import createSettingsState from "./settings/createState";

const createRootState = () => ({
    settings: createSettingsState()
});

export default createRootState;