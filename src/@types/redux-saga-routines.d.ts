// declaration merging / module augmentation
import * as Redux from "redux-saga-routines";

declare module "redux-saga-routines" {
  export function createRoutineCreator(
    stages: string[]
  ): UnifiedRoutine<(payload?: Payload) => Action<Payload | undefined>>;
  export var defaultRoutineStages: string[];
  //runSaga: SagaMiddleware<object>.run<S extends Saga<any[]>>(saga: S, ...args: Parameters<S>): Task,
  //asyncReducers: object
}
