import { useSelector } from "react-redux";
import * as settingsSelectors from '../state/settings/selectors';

const Header = (): JSX.Element => {
    const name = useSelector(settingsSelectors.selectName);
    return <h1>{name}</h1>;
}
export default Header;
