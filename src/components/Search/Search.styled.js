import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;
export const Form = styled.form`
  display: inline-flex;
  align-items: center;
  gap: 12px;
`;

export const Input = styled.input`
  padding: 8px 8px 8px 10px;
  border-radius: 10px;
  font-size: 22px;
  width: 300px;
`;

export const Button = styled.button`
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
