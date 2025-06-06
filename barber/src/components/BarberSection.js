import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const schedule = [
  { time: '09:00', client: 'John Doe' },
  { time: '10:00', client: 'Jane Smith' },
  { time: '11:00', client: 'Bob Johnson' },
];

function BarberSection() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Today's Schedule</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {schedule.map(({ time, client }) => (
            <ListItem key={time}>
              <ListItemText primary={time} secondary={client} />
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}

export default BarberSection;