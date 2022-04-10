import Template from "../components/Template";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";
import { useSelector } from 'react-redux';
import * as selectors from '../state/settings/selectors';

const Contact = () => {
    const email = useSelector(selectors.selectContactEmail);
    const emailUrl = useSelector(selectors.selectContactEmailUrl);
    const localMail = useSelector(selectors.selectContactLocalMail);
    const mail = useSelector(selectors.selectContactMail);
    const name = useSelector(selectors.selectContactName);

    return <Template>
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
                        <Typography sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.info">
                            <a href={emailUrl}>{email}</a>
                        </Typography>
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


    </Template>;
}
export default Contact;
