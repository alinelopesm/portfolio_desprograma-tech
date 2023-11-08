import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { HeaderButton } from '@/styles/buttons/linecodestyle'

const Header: React.FC = () => {
  return (
    <AppBar className='bg-[#ffffff] rounded-md mt-6' position="static">
      <Toolbar className=' px-8'>
        <Typography color='rgba(117,95,210,1)' variant="h6" style={{ flexGrow: 1 }}>
          Aline Lopes
        </Typography>
        <HeaderButton>Home</HeaderButton>
        <HeaderButton>Sobre Mim</HeaderButton>
        <HeaderButton>Projetos</HeaderButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
