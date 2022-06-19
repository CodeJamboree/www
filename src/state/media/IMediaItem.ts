import IItem from "../IItem";

interface IMediaItem extends IItem {
  name: string;
  icon: string;
  username: string;
  url: string;
}

export default IMediaItem;
