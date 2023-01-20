import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useSalesQuery } from '../hooks/useSalesQuery';
import { SearchItem } from '../components/SearchItem';

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { loading, data } = useSalesQuery({ variables: { query: query! } });

  const handleClick = (saleId: string) => {
    console.log(saleId);
  }

  return (
    <>
    <Typography variant="h3">
      Search Results for {query}
    </Typography>

    {loading && (
      <Typography variant="body1">Loading...</Typography>
    )}

    {data && (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Typography variant="body2">{data.saleSearch.resultCount} results found</Typography>
        
          {data.saleSearch.sales.map((sale) => (
            <SearchItem key={sale.id} sale={sale} onClick={handleClick} />
          ))}
      </Box>
    )}
    </>
  );
}