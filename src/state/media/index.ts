import { handleActions } from "redux-actions";
import createMediaState from "./createMediaState";
import IMediaSlice from "./IMediaSlice";

const reducer = handleActions<IMediaSlice, any>({}, createMediaState());

export default reducer;
