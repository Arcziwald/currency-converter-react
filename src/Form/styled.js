import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 500px;
  margin: 50px auto;
  padding: 5px 5px;
  background-size: auto;
  font-family: Lato, sans-serif;
  height: 405px;
  resize: both;
  overflow: auto;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.color.greyNickel};
`;

export const Fieldset = styled.fieldset`
  border: 1px solid ${({ theme }) => theme.color.silver};
  padding: 20px;
  border-radius: 10px;
  margin: 0px 0;
`;

export const Legend = styled.legend`
  background-color: teal;
  color: ${({ theme }) => theme.color.white};
  padding: 10px;
  border-radius: 10px;
`;

export const Label = styled.span`
  width: 200px;
  margin-right: 5px;
`;

export const Button = styled.button`
  width: 100%;
  margin-right: 5px;
  border: none;
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.color.persionGreen};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.bondiBlue};
  }
`;

export const Field = styled.select`
  border: 1px solid ${({ theme }) => theme.color.silver};
  padding: 10px;
  width: 100%;
  border-radius: 10px;

  &:read-only {
    background-color: ${({ theme }) => theme.color.gallery};
  }
  &:read-only {
    background-color: ${({ theme }) => theme.color.gallery};
  }
`;

export const FieldInput = styled.input`
  border: 1px solid ${({ theme }) => theme.color.silver};
  padding: 10px;
  width: 100%;
  border-radius: 10px;

  &:read-only {
    background-color: ${({ theme }) => theme.color.gallery};
  }
  &:read-only {
    background-color: ${({ theme }) => theme.color.gallery};
  }
`;
