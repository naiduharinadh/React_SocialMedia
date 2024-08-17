import * as React from 'react';
import { Box, ThemeProvider } from '@mui/material';

export default function BoxSx() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box
        sx={{
          width: 300,
          height: 40,
          marginLeft: 7,
          marginTop: -5,
          borderRadius: 10,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />
    </ThemeProvider>
  );
}
