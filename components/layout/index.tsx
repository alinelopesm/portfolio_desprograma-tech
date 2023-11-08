// components/Layout.tsx
import React, { ReactNode } from 'react';
import { Container, CssBaseline, Box, Paper } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <div className='lg:px-8 md:px-6'>
        <Header />
      </div>
      <Container className='bg-none'>
        {children}
      </Container>
      <div className='fixed bottom-0 left-0 w-full'>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
