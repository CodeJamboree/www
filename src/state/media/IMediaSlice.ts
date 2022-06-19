import ISlice from "../ISlice";
import IMediaItem from "./IMediaItem";

interface IMediaSlice extends ISlice<IMediaItem> {
  byId: {
    [id: string]: IMediaItem;
    facebook: IMediaItem;
    twitter: IMediaItem;
    linkedIn: IMediaItem;
    npm: IMediaItem;
    gitHub: IMediaItem;
  };
}

export default IMediaSlice;
