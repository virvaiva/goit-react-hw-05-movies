import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Home = () => {
  const NavItem = styled(NavLink)`
    display: block;
    text-align: center;
    text-shadow: 2px 2px 3px rgb(255 255 255 / 10%);
    text-transform: uppercase;
    gap: ${p => p.theme.space[3]}px;
    padding: ${p => p.theme.space[4]}px;
    border-radius: 10px;
    text-decoration: none;
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
  `;
  return <NavItem>Popular movies today</NavItem>;
};
