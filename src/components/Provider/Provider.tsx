import { Store } from "@mui/icons-material";
import { Provider } from "react-redux";

interface ICustomProvider {
  store: any;
  children: JSX.Element;
}
const CustomProvider = ({ store, children }: ICustomProvider) => (
  <Provider store={store}>{children}</Provider>
);

export default CustomProvider;
