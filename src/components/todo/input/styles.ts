import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  width: 100%;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

export const StyledAddButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: royalblue;
  }
`;
