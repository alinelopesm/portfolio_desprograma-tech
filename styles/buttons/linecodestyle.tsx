import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

export const HeaderButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 50,
    padding: 16,
    color: 'rgba(117,95,210,1)',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      borderBottom: `2px solid rgba(59,50,80,0.36)`,
      color: 'rgba(25,26,30,0.70)',
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));