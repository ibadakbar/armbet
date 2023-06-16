import React, { useContext } from 'react';
import { themeContext } from '../../theme/Provider';
import btnStyle from './style';
import styled from 'styled-components';
import theme from "../../theme";

const TagComponent = styled.button `
  background-color: ${ props => (props.bgColor || ( props.isText ? "transparent" : theme.colors.color4 )) };
  transition: ${theme.buttons.transition};
  cursor: ${ props => (props.onClick ? "pointer" : "default") };
  &:hover {
    ${ props => (!props.disabled && ("background-color: " + props.isText ? "transparent" : (props.hoverBGColor || theme.tags.hover.bgColor || theme.colors.color4ShadeDown[2]))) };
    transition: ${theme.buttons.transition};
    ${props => (props.hoverStyle)}

  }
  ${ props => (props.disabled && "opacity:0.3;cursor:not-allowed;") }
  ${ props => (props.disabled && props.disabledStyle) }
`;

const Tag = (props) => {
  const { isText, borderRadius, color, children, style, size, onClick } = props
  const theme = useContext(themeContext);
  return (
    <TagComponent {...props} className={btnStyle.container} style={{
        borderRadius: borderRadius || theme.borderRadius,
        color: color || (isText ? theme.colors.text : "white"),
        minWidth: size ? theme.buttons[size].width : null,
        ...style
    }} onClick={onClick} >
        {children}
    </TagComponent>
  );
};



export default Tag;