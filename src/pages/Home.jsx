// Home
import { Box } from "@mui/material";
import RecentActorsIcon from '@mui/icons-material/RecentActors';

export default function Home() {

  return (
    <Box sx={{ color: "var(--link-color)", paddingTop: "20px", backgroundImage: "linear-gradient(orange, white)", height: "100%" }}>
      <p>🤗</p>
      <h2>Hi, user!</h2>
      <h4>
        This app provides you maintain your contacts. <br />
        Enjoy!
      </h4>
      <RecentActorsIcon fontSize="large"/>
    </Box>
  );
}
