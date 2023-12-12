import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs({value, handleChange}) {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Overview" />
        <Tab label="Reading & Writing" />
        <Tab label="Math" />
      </Tabs>
    </Box>
  );
}