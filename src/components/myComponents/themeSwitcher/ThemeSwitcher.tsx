import styled from "styled-components";

const LabelText = styled.p`
  font-family: Arial, sans-serif;
`;

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: max-content;
`;


const Switch = styled.div`
  position: relative;
  cursor: pointer;
  width: 60px;
  height: 20px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;
  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 15px;
    border-radius: 35px;
    top: 50%;
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


const ToggleSwitch = ({labelText}: {labelText: string}) => {
  return (
    <SwitchWrapper>
      <LabelText>{labelText}</LabelText>
      <label>
        <Input type="checkbox" onChange={(e) => {
          console.log('changed')
        }}/>
        <Switch/>
      </label>
    </SwitchWrapper>
  );
};
export default ToggleSwitch;