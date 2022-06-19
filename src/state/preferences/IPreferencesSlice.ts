import ISlice from "../ISlice";
import IPreferenceItem from "./IPreferenceItem";

interface IPreferencesSlice extends ISlice<IPreferenceItem> {
  byId: {
    [id: string]: IPreferenceItem;
    darkMode: IPreferenceItem;
  };
}

export default IPreferencesSlice;
