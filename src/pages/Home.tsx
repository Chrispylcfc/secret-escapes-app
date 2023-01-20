import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SearchField } from '../components/SearchField';

export const Home = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleChange = (newValue: string) => {
    setSearchText(newValue);
  }
  
  const handleSearch = () => {
    navigate(`/search?query=${searchText}`);
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="h2">
        Secret Escapes App
      </Typography>

      <SearchField value={searchText} onChange={handleChange} onSearch={handleSearch} />
    </Box>
  )
}