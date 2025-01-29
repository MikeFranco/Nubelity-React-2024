import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import { COMPANY_NAME } from '../../../../utils/constants';

const MUIHeader = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography>{COMPANY_NAME}</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MUIHeader;
