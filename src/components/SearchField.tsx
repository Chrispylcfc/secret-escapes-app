import React, { KeyboardEvent } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import {Search as SearchIcon} from '@mui/icons-material';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export const SearchField = ({ value, onChange, onSearch }: Props) => {
  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if(event.key === 'Enter') {
      onSearch();
    }
  }

  return (
    <TextField 
      id="location-search"
      label="Location"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      InputProps={{
        endAdornment: 
          <InputAdornment position="end">
            <IconButton
              onClick={onSearch}
              edge="end"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>,
      }}
      onKeyDown={handleKeyPress}
    />
  );
}
