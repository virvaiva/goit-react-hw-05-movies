import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilmCardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 28px;
  font-size: 32px;
  color: #010101;
  /* width: 1200px; */
  margin-top: 20px;
  border-bottom: 1px solid black;
`;

export const Section = styled.section`
  padding: 120px 20px;
  margin: 0 auto;
  max-width: 1280px;
  border-bottom: 1px solid black;
`;
export const SectionDiv = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: 1280px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AButton = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  background-color: #218657;
  padding: 15px;
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
export const H1 = styled.h1`
  margin: 0 0 24px;
  font-size: 54px;
`;
export const P = styled.p`
  margin: 0 0 20px;
  font-size: 28px;
`;
export const H2 = styled.h2`
  margin: 0 0 16px;
  font-size: 32px;
`;
export const H3 = styled.h3`
  margin: 0 0 16px;
  font-size: 28px;
`;
export const Ul = styled.ul`
  margin: 0 auto;
  font-size: 24px;
  /* padding-left: 0; */
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const Li = styled.li``;
export const LinkList = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  color: #000;
  :hover,
  :focus {
    color: #218657;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
