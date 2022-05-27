import { Container, Typography } from '@mui/material';
import { FC } from 'react';

const App: FC = () => (
  <Container>
    <Typography variant='h1' sx={{ textAlign: 'center', marginTop: '32px' }}>
      Hello World!
    </Typography>
  </Container>
);

export default App;
