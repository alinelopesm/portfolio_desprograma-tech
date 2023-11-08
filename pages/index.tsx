import React from 'react';
import Layout from '@/components/layout/index';
import { Box, Typography, Button } from '@mui/material';

const App: React.FC = () => {
  return (
    <Layout> 
      <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Boas-vindas ao meu portfolio!!
      </Typography>
      <Typography variant="h6" gutterBottom>
        Eu sou Aline Lopes
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Desenvolvedora Web & UX/UI Designer
      </Typography>
      <Typography variant="body1">
        AQUI VAI UMA BREVE DESCRIÇÃO OU SLOGAN
      </Typography>
      <Typography variant="body1" gutterBottom>
        Veja alguns lugares por onde passei!
      </Typography>
      <div className='flex flex-row gap-4'>
        <Button variant="contained" color="primary" href="/seu-curriculo">
          Currículo
        </Button>
        <Button variant="contained" color="primary" href="/contato">
          Contato
        </Button>
      </div>
    </Box>
    </Layout>
  );
};

export default App;
