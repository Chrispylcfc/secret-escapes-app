import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSalesSearchQuery } from '../hooks/useSalesSearchQuery';
import { SearchItem } from '../components/SearchItem';

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get('query');
  const { loading, data, error } = useSalesSearchQuery({ variables: { query: query! } });

  const handleClick = (saleId: string) => {
    navigate(`/sale/${saleId}`);
  }

  if (error) {
    throw new Response(error.message, { status: 500 });
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