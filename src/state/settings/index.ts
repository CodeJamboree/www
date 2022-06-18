import { handleActions } from "redux-actions";
import produce from "immer";
import * as actions from "./actions";
import createState from "./createState";

const onChangeLanguage = produce((draft, action) => {
  draft.language = action.payload;
});

export default handleActions(
  {
    [actions.changeLanguage.TRIGGER]: onChangeLanguage,
  },
  createState()
);
