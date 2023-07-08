import styled from "styled-components";

export const StyleForm = styled.form`
  max-width: 500px;
  margin: 50px auto;
  padding: 5px 5px;
  background-size: auto;
  font-family: Lato, sans-serif;
  height: 405px;
  resize: both;
  overflow: auto;
  border-radius: 30px;
  background-color: rgb(184 184 176 / 67%);
`;

export const Fieldset = styled.fieldset`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  margin: 0px 0;
`;

export const Legend = styled.legend`
  background-color: teal;
  color: white;
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
  background-color: teal;
  color: white;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: hsl(180, 100%, 30%);
  }

  &:active {
    background-color: hsl(180, 100%, 35%);
  }
`;

export const Field = styled.select`
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
  border-radius: 10px;

  &:read-only {
    background-color: #eee;
  }
  &:read-only {
    background-color: #eee;
  }
`;

export const FieldInput = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
  border-radius: 10px;

  &:read-only {
    background-color: #eee;
  }
  &:read-only {
    background-color: #eee;
  }
`;
