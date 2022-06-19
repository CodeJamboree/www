import ISlice from "../ISlice";
import IMediaItem from "./IMediaItem";

interface IMediaSlice<T extends IMediaItem = IMediaItem> extends ISlice<T> {}

export default IMediaSlice;
