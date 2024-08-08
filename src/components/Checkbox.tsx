import React from "react";
import styled from "styled-components";

interface CheckboxProps {
  color: string;
  label: string;
}

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledCheckbox = styled.div<{ color: string; checked: boolean }>`
  width: 13px;
  height: 13px;
  border: 1px solid ${(props) => props.color};
  background-color: ${(props) => (props.checked ? props.color : "transparent")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

const Label = styled.label<{ color: string }>`
  margin-left: 5px;
  color: ${(props) => props.color};
  font-size: 14px;
`;

const Checkbox: React.FC<CheckboxProps> = ({ color, label }) => {
  const [checked, setChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={handleCheckboxChange} />
      <StyledCheckbox
        color={color}
        checked={checked}
        onClick={handleCheckboxChange}
      />
      <Label color={color}>{label}</Label>
    </CheckboxContainer>
  );
};

export default Checkbox;
