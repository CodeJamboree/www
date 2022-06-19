import { useSelector } from "react-redux";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Devicon from "../../components/Devicon";

import * as selectors from "../../state/media/selectors";

const SocialMedia = () => {
  const allIds = useSelector(selectors.selectAllIds);
  const byId = useSelector(selectors.selectById);

  return (
    <>
      <Typography variant="h3" color="primary">
        Social Media
      </Typography>
      <Typography variant="body2">
        Want to see the latest news and socialize?
      </Typography>
      <Paper variant="outlined">
        <List
          sx={{ width: "100%", maxWidth: 360, bgColor: "background.paper" }}
        >
          {allIds.map((id) => {
            const { icon, name, url, username } = byId[id];
            return (
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Devicon icon={icon} />
                </ListItemAvatar>
                <ListItemText
                  primary={name}
                  secondary={
                    <Button
                      variant="text"
                      component="a"
                      target="_top"
                      rel="noopener noreferrer"
                      sx={{ textTransform: "none" }}
                      color="info"
                      href={url}
                    >
                      {username}
                    </Button>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </>
  );
};
export default SocialMedia;
