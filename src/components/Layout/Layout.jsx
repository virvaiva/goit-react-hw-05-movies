import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import * as SC from './Loyaut.styled';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <SC.Container>
      <SC.Header>
        <SC.Section>
          <SC.Nav>
            <SC.StyledLink to="/" end>
              Home
            </SC.StyledLink>
            <SC.StyledLink to="movies">Movies</SC.StyledLink>
          </SC.Nav>
        </SC.Section>
      </SC.Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </SC.Container>
  );
};
