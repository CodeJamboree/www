// declaration merging / module augmentation
import * as Redux from "redux";

declare module "redux" {
  export interface Store {
    runSaga: SagaMiddleware<object>; //.run<S extends Saga<any[]>>(saga: S, ...args: Parameters<S>): Task,
    asyncReducers: object;
  }
}
