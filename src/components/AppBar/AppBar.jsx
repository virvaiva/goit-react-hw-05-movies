import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BiCameraMovie } from 'react-icons/bi';

import * as SC from 'components/styled';

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
  gap: 8px;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  color: #2a2a2a;
  font-size: 16px;
  font-weight: 700;

  &:hover,
  :focus {
    background-color: #218657;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const AppBar = () => {
  return (
    <SC.Box
      as="header"
      p={3}
      borderBottom="2px solid gray"
      boxShadow="0px 10px 5px 0px rgba(0,0,0,0.75)"
    >
      <SC.Nav as="nav" display="flex">
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavItem to={href} key={href}>
            <Icon size="20px" />
            {text}
          </NavItem>
        ))}
      </SC.Nav>
    </SC.Box>
  );
};
