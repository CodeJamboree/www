import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Icon from "@mui/material/Icon";

import positions from './positions';

const Jobs = () => {

    return <>
        <Typography variant="h3" color="primary">Employment</Typography>
        <Typography variant="body2">Are you interested in joining the team?</Typography>
        <Paper variant="outlined">
            <List sx={{ width: "100%", maxWidth: 360, bgColor: "background.paper" }}>
                {positions.map(({ title, icon, details, location }, i) => (<ListItem key={`${title}_${i}`} alignItems="flex-start">
                    <ListItemAvatar>
                        <Icon>{icon}</Icon>
                    </ListItemAvatar>
                    <ListItemText primary={`${title} (${location})`} secondary={
                        details?.map(({ header, text }, i) =>
                            <Typography key={`details_${i}`} sx={{ display: "block" }}
                                component="span"
                                variant={header ? "body1" : "body2"}
                                color={header ? "text.primary" : "text.secondary"}>
                                {text}
                            </Typography>)
                    } />
                </ListItem>)
                )}

            </List>
        </Paper>


    </>;
}
export default Jobs;
