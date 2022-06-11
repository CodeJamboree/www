import { useSelector } from 'react-redux';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import * as selectors from '../../state/settings/selectors';

const SocialMedia = () => {
    const facebookUrl = useSelector(selectors.selectFacebookUrl);
    const facebookUser = useSelector(selectors.selectFacebookUser);
    const linkedInUrl = useSelector(selectors.selectLinkedInUrl);
    const linkedInUser = useSelector(selectors.selectLinkedInUser);
    const twitterUrl = useSelector(selectors.selectTwitterUrl);
    const twitterUser = useSelector(selectors.selectTwitterUser);

    return <>
        <Typography variant="h3" color="primary">Social Media</Typography>
        <Typography variant="body2">Want to see the latest news and socialize?</Typography>
        <Paper variant="outlined">
            <List sx={{ width: "100%", maxWidth: 360, bgColor: "background.paper" }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <FacebookIcon />
                    </ListItemAvatar>
                    <ListItemText primary="Facebook" secondary={
                        <Button
                        variant="text"
                        component="a"
                        target="_top"
                        rel="noopener noreferrer"
                        sx={{textTransform: 'none'}}
                        color="info"
                        href={facebookUrl}>
                            {facebookUser}
                        </Button>
                    } />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <TwitterIcon />
                    </ListItemAvatar>
                    <ListItemText primary="Twitter" secondary={
                        <Button
                        variant="text"
                        component="a"
                        target="_top"
                        rel="noopener noreferrer"
                        sx={{textTransform: 'none'}}
                        color="info"
                        href={twitterUrl}>
                            {twitterUser}
                        </Button>
                    } />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <LinkedInIcon />
                    </ListItemAvatar>
                    <ListItemText primary="LinkedIn" secondary={
                        <Button
                        variant="text"
                        component="a"
                        target="_top"
                        rel="noopener noreferrer"
                        sx={{textTransform: 'none'}}
                        color="info"
                        href={linkedInUrl}>
                            {linkedInUser}
                        </Button>
                    } />
                </ListItem>
            </List>
        </Paper>


    </>;
}
export default SocialMedia;
