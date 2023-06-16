import React, { useContext } from 'react';
import { themeContext } from '../../theme/Provider';
import btnStyle from './style';
import styled from 'styled-components';
import theme from "../../theme";

const ButtonComponent = styled.button `
  background-color: ${ props => (props.bgColor || ( props.isText ? "transparent" : theme.colors.color1 )) };
  transition: ${theme.buttons.transition};
  cursor: pointer;
  color: ${ props => (props.color || (!props.isText ? "white" : null)) };
  &:hover {
  ${ props => (!props.disabled && ("background-color: " + (props.isText ? "transparent" : (props.hoverBGColor || theme.buttons.hover.bgColor || theme.colors.color1ShadeDown[2]) ) ) ) };
    transition: ${theme.buttons.transition};
    ${props => (props.hoverStyle)}

  }
  ${ props => (props.disabled && "opacity:0.3;cursor:not-allowed;") }
  ${ props => (props.disabled && props.disabledStyle) }
`;

const Button = (props) => {
  const { isText, borderRadius, href, children, style, size, onClick, className } = props
  const theme = useContext(themeContext);
  const theButton = () => (
    <ButtonComponent {...props} className={btnStyle.container + (className ? " " + className : "") } style={{
        borderRadius: isText ? 0 : (borderRadius || theme.borderRadius),
        minWidth: size ? theme.buttons[size].width : null,
        padding: isText ? theme.links.padding : theme.buttons.padding,
        ...style
    }} onClick={onClick} >
        {children}
    </ButtonComponent>
  );
  return (
    <>
      {href ? 
        (<a href={href}>
          {theButton()}
        </a>) 
        :
        (
          theButton()
        )
      }
    </>
    
  );
};



export default Button;