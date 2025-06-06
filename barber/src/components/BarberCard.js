import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

function BarberCard({ barber, onClick }) {
  return (
    <Card sx={{ height: '100%', bgcolor: 'background.paper' }}>
      <CardActionArea sx={{ height: '100%' }} onClick={onClick}>
        <CardMedia component="img" height="220" image={barber.photo} alt={barber.name} />
        <CardContent>
          <Typography variant="h6" sx={{ color: 'primary.main' }}>
            {barber.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Age: {barber.age}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BarberCard;
