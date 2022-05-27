import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectSettings } from '../slices/settingsSlice';
import App from './App';

const Root = () => {
  const settings = useSelector(selectSettings);

  const theme = createTheme({
    palette: {
      mode: settings.darkMode ? 'dark' : 'light'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

export default Root;
