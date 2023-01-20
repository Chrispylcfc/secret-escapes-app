import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import {Search as SearchIcon} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  }
  
  const handleSearch = () => {
    navigate(`/search?query=${searchText}`);
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if(event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <>
      <Typography variant="h2">
        Secret Escapes App
      </Typography>

      <TextField 
        id="location-search"
        label="Location"
        value={searchText}
        onChange={handleChange}
        InputProps={{
          endAdornment: 
            <InputAdornment position="end">
              <IconButton
                onClick={handleSearch}
                edge="end"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>,
        }}
        onKeyDown={handleKeyPress}
      />
    </>
  )
}