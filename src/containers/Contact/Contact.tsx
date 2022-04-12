import { useSelector } from 'react-redux';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";

import * as selectors from '../../state/settings/selectors';

const Contact = () => {
    const email = useSelector(selectors.selectContactEmail);
    const emailUrl = useSelector(selectors.selectContactEmailUrl);
    const localMail = useSelector(selectors.selectContactLocalMail);
    const mail = useSelector(selectors.selectContactMail);
    const name = useSelector(selectors.selectContactName);

    return <>
        <Typography variant="h3" color="primary">Contact Us</Typography>
        <Typography variant="body2">Want to get in touch? We'd love to hear from you.</Typography>
        <Paper variant="outlined">
            <List sx={{ width: "100%", maxWidth: 360, bgColor: "background.paper" }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <PersonIcon />
                    </ListItemAvatar>
                    <ListItemText primary="Contact" secondary={
                        name?.map(address =>
                            <Typography key={address} sx={{ display: "block" }}
                                component="span"
                                variant="body2"
                                color="text.primary">
                                {address}
                            </Typography>)
                    } />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <EmailIcon />
                    </ListItemAvatar>
                    <ListItemText primary="Email" secondary={
                        <Button
                        variant="text"
                        component="a"
                        target="_top"
                        rel="noopener noreferrer"
                        sx={{textTransform: 'none'}}
                        color="info"
                        href={emailUrl}>
                            {email}
                        </Button>
                    } />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <WorkIcon />
                    </ListItemAvatar>
                    <ListItemText primary="Local Mail" secondary={
                        localMail?.map(address =>
                            <Typography key={address} sx={{ display: "block" }}
                                component="span"
                                variant="body2"
                                color="text.primary">
                                {address}
                            </Typography>
                        )
                    } />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <BusinessIcon />
                    </ListItemAvatar>
                    <ListItemText primary="Mailing Address" secondary={
                        mail?.map(address =>
                            <Typography key={address} sx={{ display: "block" }}
                                component="span"
                                variant="body2"
                                color="text.primary">
                                {address}
                            </Typography>
                        )
                    } />
                </ListItem>

            </List>
        </Paper>


    </>;
}
export default Contact;
