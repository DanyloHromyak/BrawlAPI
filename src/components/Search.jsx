import { InputAdornment, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  return (
    <TextField
      size="small"
      sx={{ backgroundColor: 'white', borderRadius: '5px' }}
      label="Search..."
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
  );
}
export default Search;
