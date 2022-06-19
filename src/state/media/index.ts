import { handleActions } from "redux-actions";
import produce from "immer";
import * as actions from "./actions";
import createMediaState from "./createMediaState";
import IMediaSlice from "./IMediaSlice";

interface IMediaAction {
  type: string;
  payload: object;
}

interface IFoo {
  (state: IMediaSlice, ...args: IMediaAction[]): IMediaSlice;
}
interface IMediaActions {
  foo: IFoo;
}

//ReduxCompatibleReducer<IMediaSlice>
// const onFoo = produce<IMediaSlice, IMediaAction[]>((draft, action) => draft);
const onFoo = produce((draft, action) => draft);

const reducer = handleActions(
  {
    [actions.foo.TRIGGER]: onFoo,
  },
  createMediaState()
);

export default reducer;
