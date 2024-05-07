import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  width: max-content;
`;


const Switch = styled.div`
  position: relative;
  cursor: pointer;
  width: 60px;
  height: 28px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;
  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  display: none;
  &:checked + ${Switch} {
    background: green;
    &:before {
      transform: translate(32px, -50%);
    }
  }
`;


const ToggleSwitch = () => {
  return (
    <Label>
<p>test</p>
      <Input type="checkbox"/>
      <Switch />
    </Label>
  );
};
export default ToggleSwitch;