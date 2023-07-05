/* eslint-disable react/no-unknown-property */
import { AppBar, Typography, Box, Container } from "@mui/material";
import Search from "./Search";
import BrawlStarsIcon from "./BrawlStarsIcon";

function Header() {
  return (
    <AppBar position="fixed" sx={{ boxShadow: 0 }}>
      <Container size="medium">
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} px={'40px'} py={'10px'} >
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <BrawlStarsIcon />
          <Typography padding="0 0 0 0.5em" variant="h5">Brawl Stars Tracker</Typography>
        </Box>
        <Box>
          <Search />
        </Box>
      </Box>
      </Container>
    </AppBar>
  );
}

export default Header;
