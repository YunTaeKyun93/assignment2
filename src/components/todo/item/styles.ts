import styled from "styled-components";

export const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const StyledTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  color: #333;
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #666;
  width: 100%;
`;

export const StyledContentText = styled.p<{ isChecked: boolean }>`
  font-size: 16px;
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
`;

export const StyledCheckbox = styled.input`
  margin-right: 8px;
  cursor: pointer;
`;

export const StyledButton = styled.button<{ disabled: boolean }>`
  margin-top: 12px;
  padding: 8px 16px;
  background-color: ${(props) => (props.disabled ? "#aaa" : "#007bff")};
  color: ${(props) => (props.disabled ? "#666" : "white")};
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 14px;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#aaa" : "#0056b3")};
  }
`;
