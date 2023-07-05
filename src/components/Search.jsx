import { MenuItem, InputAdornment, IconButton, TextField, Box, FormControl, InputLabel, Select } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

function Search() {
  const [stats, setStats] = useState("Player");

  function handleChange(e) {
    // if user doesnt click on the menuItem, then the default value is "Player"
    if (e.target.value === "Player" || e.target.value === "Club") {
      setStats(e.target.value);
    }
  }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Box>
      <FormControl sx={{ m: 0.5, minWidth: 100, }}>
        <InputLabel>{stats}</InputLabel>
        <Select
          onChange={handleChange}
          autoWidth
          
        >
          <MenuItem value={"Player"}>Player</MenuItem>
          <MenuItem value={"Club"}>Club</MenuItem>
        </Select>
      </FormControl>
    </Box>
      <TextField
        size="small"
        sx={{ backgroundColor: 'white', borderRadius: '5px' }}
        placeholder="Search..."
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
export default Search;
