import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
// import * as SC from 'components/styled';
export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};
