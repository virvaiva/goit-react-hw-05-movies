import styled from 'styled-components';
import { Box } from 'components/Box/Box';
import { AiOutlineHome } from 'react-icons/ai';
import { BiCameraMovie } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const navItems = [
  { href: 'Home', text: 'Home', icon: AiOutlineHome },
  { href: 'Movies', text: 'Movies', icon: BiCameraMovie },
];
const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[4]}px;
  border-radius: 10px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;

export const AppBar = () => {
  return (
    <Box
      as="header"
      p={3}
      borderBottom="2px solid gray"
      boxShadow="0px 10px 5px 0px rgba(0,0,0,0.75)"
    >
      <Box as="nav" display="flex">
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavItem to={href} key={href}>
            <Icon size="20px" />
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};
