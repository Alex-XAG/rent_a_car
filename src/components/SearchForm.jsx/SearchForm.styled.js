import styled from '@emotion/styled';

export const SearchFormBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 10px;
  margin-top: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  margin-top: 5px;
  margin-right: 10px;
`;

export const Label = styled.label`
  display: flex;
  gap: 8px;
`;

export const Search = styled.button`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1.2;
  color: #000;

  padding: 10px 20px;

  border: 1px solid #000;
  border-radius: 15px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
  }
`;
