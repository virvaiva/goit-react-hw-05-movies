import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  background: #fff;
`;
export const Container = styled.div``;
export const Section = styled.section`
  padding: 20px 24px;
  margin: 0 auto;
  max-width: 1280px;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  font-size: 35px;
  margin: 0 auto;
  max-width: 1280px;
  gap: 24px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  background-color: #218657;
  gap: 8px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  &.active {
    color: #fff;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #fff;
  }
`;
