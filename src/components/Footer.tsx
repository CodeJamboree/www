import { useSelector } from "react-redux";
import * as settingsSelectors from '../state/settings/selectors';

const Header = (): JSX.Element => {
    const license = useSelector(settingsSelectors.selectLicense);
    return <h6>{license}</h6>;
}
export default Header;
