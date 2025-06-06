import React, { useState } from 'react';
import { Container, Typography, Grid, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import BarberCard from './components/BarberCard';
import ScheduleDialog from './components/ScheduleDialog';
import { initialBarbers } from './data/barbers';
import theme from './theme';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [barbers, setBarbers] = useState(initialBarbers);
  const [selected, setSelected] = useState(null);

  const handleSchedule = (barberId, dateKey, time, client) => {
    setBarbers((prev) =>
      prev.map((b) =>
        b.id === barberId
          ? {
              ...b,
              schedule: {
                ...b.schedule,
                [dateKey]: [...(b.schedule[dateKey] || []), { time, client }],
              },
            }
          : b
      )
    );
    toast.success(`Booked ${time} on ${dateKey}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" className="app-root">
        <Typography variant="h3" align="center" gutterBottom>
          Barbers
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {barbers.map((barber) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={barber.id}>
              <BarberCard barber={barber} onClick={() => setSelected(barber)} />
            </Grid>
          ))}
        </Grid>
        <ScheduleDialog
          barber={selected}
          open={Boolean(selected)}
          onClose={() => setSelected(null)}
          onSchedule={handleSchedule}
        />
      </Container>
      <ToastContainer position="bottom-right" />
    </ThemeProvider>
  );
}

export default App;
