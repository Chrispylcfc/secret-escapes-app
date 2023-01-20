import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Sale } from '../hooks/useSalesQuery';

interface Props {
  sale: Sale;
  onClick: (saleId: string) => void;
}

export const SearchItem = ({ sale, onClick }: Props) => {
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: '25%' }}
        image={sale.photos[0].url}
        alt={sale.editorial.destinationName}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
        <Typography variant="h6">
          {sale.editorial.destinationName}
        </Typography>
        <Typography variant="body1">
          {sale.editorial.title}
        </Typography>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button size="small" color="primary" onClick={() => onClick(sale.id)}>
            View details
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}