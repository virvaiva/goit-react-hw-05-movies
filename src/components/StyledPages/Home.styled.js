import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: 20px 20px;
  margin: 0 auto;
  max-width: 1280px;
`;
export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  border-radius: 10px;
  text-shadow: 2px 2px 4px rgb(255 255 255 / 50%);
  gap: 4px;
  padding: 8px;
  color: #2a2a2a;
  font-size: 32px;
  font-weight: 700;
`;

export const PopUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 0px;
  margin: 0px;
`;
export const PopLi = styled.li`
  width: 250px;
  :hover,
  :focus {
    scale: 1.1;
    transition: all 0.8s 0s ease-in-out;
  }
`;
export const LinkList = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  color: #000;
  :hover,
  :focus {
    color: #fff;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const PopImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 5px;
`;
export const PopDiv = styled.div`
  padding-top: 8px;
  width: 200px;
`;
export const PopTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 20px;
`;
export const PopText = styled.p`
  margin: 0 0 10px 0;
  font-size: 15px;
`;
