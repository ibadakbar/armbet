import React from 'react';
import styled from 'styled-components';
import theme from "../../theme";


const InputLabel = styled.label `
  color: ${ props => (props.color || theme.inputs.labelColor ) };
  margin-bottom: ${ props => (props.labelMarginBottom || theme.inputs.labelMarginBottom ) };
`;



const Label = (props) => {
    const { name, vPadding, children, style } = props

    return (
        <div style={{...style,paddingTop:vPadding || null,paddingBottom:vPadding || null,}}>
            <InputLabel for={name}>{children}</InputLabel>
        </div>
    );
};



export default Label;