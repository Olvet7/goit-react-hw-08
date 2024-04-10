// Home
import { Box, Link} from "@mui/material";
// import {Link} from "react-router-dom";
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
      <RecentActorsIcon fontSize="large" sx={{marginBottom: "50px"}}/>
      <Box sx={{textAlign: "left", margin: "0 auto", padding: "20px 20px" , backgroundColor: "white", color: "var(--accent-color)", width: "200px", borderRadius: "8px"}}>
     <Box sx={{marginBottom: "20px"}}>
     <h4>Visit my page:</h4>
      <Link href="https://github.com/Olvet7">Git</Link>
     </Box>
      <h4>My other projects:</h4>
      <ul>
        <li>
        <Link href="https://olvet7.github.io/Code-For-Food-Proj/">Food Boutique</Link>
        </li>
        <li>
        <Link href="<li>
          <Link>https://olvet7.github.io/Code-For-Food-Proj/</Link>
        </li>">Minimal</Link>
        </li>
      </ul>
      </Box>
    </Box>
  );
}
