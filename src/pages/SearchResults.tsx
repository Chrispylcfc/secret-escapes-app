import React from 'react';
import { Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useSalesQuery } from '../hooks/useSalesQuery';

export const SearchResults = () => {
  const [searchParams] = useSearchParams();

  const { loading, data } = useSalesQuery({ query: searchParams.get('query')! });

  return (
    <>
    <Typography variant="h3">
      Search Results
    </Typography>

    {loading && (
      <Typography variant="body1">Loading...</Typography>
    )}

    {data && (
      data.saleSearch.sales.map((sale) => (
        <Typography key={sale.id} variant="body1">{sale.id}</Typography>
      ))
    )}
    </>
  );
}