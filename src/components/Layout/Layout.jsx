import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'components/Box/Box';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box display="block">
      <AppBar />
      <Outlet />
    </Box>
  );
};
