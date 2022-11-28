import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: 120px 20px;
  margin: 0 auto;
  max-width: 1280px;
`;
export const UlSearch = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 0px;
  margin: 0px;
  margin: 0 auto;
`;
export const Li = styled.li`
  width: 250px;
  :hover,
  :focus {
    scale: 1.1;
    transition: all 0.8s 0s ease-in-out;
  }
`;
export const Div = styled.div`
  padding-top: 8px;
  width: 200px;
`;
export const Text = styled.p`
  margin: 0 0 10px 0;
  font-size: 18px;
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
export const P = styled.p`
  text-align: center;
  text-shadow: 4px 4px 2px rgba(150, 150, 150, 1);
  font-size: 40px;
`;
export const Pred = styled.p`
  text-align: center;
  text-shadow: 4px 4px 2px rgba(150, 150, 150, 1);
  font-size: 50px;
  font-weight: bold;
  color: red;
`;
export const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 5px;
`;
export const TitleFilm = styled.h3`
  margin: 0 0 10px 0;
  font-size: 20px;
`;
