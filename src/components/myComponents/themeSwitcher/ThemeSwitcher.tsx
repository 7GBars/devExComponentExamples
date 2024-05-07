import styled from "styled-components";

interface StyledButtonProps {
  currenttheme: string
};

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({currenttheme}) => currenttheme === "generic.dark" ? "white" : "black"};
  font-size: 32px;
  color: ${({currenttheme}) => currenttheme === "generic.dark" ? "black" : "white"};
`;


function ButtonComponent(props: StyledButtonProps) {
  console.log(props)
  // Use it like any other component.
  return <StyledButton currenttheme={props.currenttheme}> ChangeTheme </StyledButton>;
};

export default ButtonComponent;