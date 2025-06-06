import React, { useState, useMemo } from 'react';
import {
  Dialog,
  DialogTitle,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';

const times = Array.from({ length: 20 }, (_, i) => {
  const h = Math.floor(i / 2) + 8;
  const m = i % 2 ? '30' : '00';
  return `${h.toString().padStart(2, '0')}:${m}`;
});

function ScheduleDialog({ barber, open, onClose, onSchedule }) {
  const [date, setDate] = useState(new Date());
  const [client, setClient] = useState('');

  const dateKey = format(date, 'yyyy-MM-dd');

  const booked = useMemo(() => new Set((barber?.schedule[dateKey] || []).map((a) => a.time)), [barber, dateKey]);

  const handleBook = (time) => {
    if (!client.trim()) return;
    onSchedule(barber.id, dateKey, time, client);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      {barber && (
        <>
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {barber.name}'s Schedule
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <Box sx={{ p: 2, bgcolor: 'background.default' }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={date}
                onChange={(newValue) => setDate(newValue)}
                renderInput={(params) => <TextField fullWidth sx={{ mb: 2 }} {...params} />}
              />
            </LocalizationProvider>
            <TextField
              fullWidth
              label="Your Name"
              value={client}
              onChange={(e) => setClient(e.target.value)}
              sx={{ mb: 2 }}
            />
            <List>
              {times.map((time) => (
                <ListItem
                  key={time}
                  secondaryAction={
                    booked.has(time) ? null : (
                      <Button variant="contained" size="small" onClick={() => handleBook(time)}>
                        Book
                      </Button>
                    )
                  }
                >
                  <Stack>
                    <ListItemText
                      primary={time}
                      secondary={booked.has(time) ? barber.schedule[dateKey].find((a) => a.time === time).client : 'Free'}
                    />
                  </Stack>
                </ListItem>
              ))}
            </List>
          </Box>
        </>
      )}
    </Dialog>
  );
}

export default ScheduleDialog;
