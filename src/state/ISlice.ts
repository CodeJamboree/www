import IItem from "./IItem";

interface ISlice<T extends IItem> {
  byId: {
    [id: string]: T;
  };
  allIds: string[];
}

export default ISlice;
