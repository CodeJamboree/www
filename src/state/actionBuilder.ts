import {
  createRoutine,
  createRoutineCreator,
  defaultRoutineStages,
} from "redux-saga-routines";

const actionBuilder = (domain: string, emoji: string) => {
  const actionTypePrefix = (action: string) => `${domain} ${emoji} ${action}`;

  const build = <T = any>(action: string) =>
    createRoutine<T>(actionTypePrefix(action));

  const withStages = (action: string, ...stages: string[]) => {
    const creator = createRoutineCreator([...defaultRoutineStages, ...stages]);
    return creator(actionTypePrefix(action));
  };

  const fileReaderStages = (action: string) =>
    withStages(action, "PROGRESS", "ABORT");

  build.withStages = withStages;
  build.fileReaderStages = fileReaderStages;

  return build;
};

export default actionBuilder;
