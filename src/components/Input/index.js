import React, { useContext, useState, useEffect } from 'react';
import { themeContext } from '../../theme/Provider';
import styled from 'styled-components';
import theme from "../../theme";
import Label from "../Label";
import f from "../../resources/functions";
import useForceUpdate from 'use-force-update';
/* VALID : 0 MEANS INVALID, 1 MEANS VALID, -1 MEANS DEFAULT */

const InputComponent = styled.input `
    background-color: ${ props => (props.bgColor || theme.inputs.bgColor ) };
    padding: ${ props => (props.padding || theme.inputs.padding ) };
    border-radius:  ${ props => (props.borderRadius || theme.inputs.borderRadius) };
    margin-right:  ${ props => (props.marginRight || 0) };
    box-sizing: content-box;
`;



const Input = (props) => {
    const [state, setState] = useState({ isValid: -1, value: "" });
    const update = useForceUpdate();
    const { contentType, valid, getSetValue, onBlur, textTransform, customValidation, width, name, type, containerStyle, vPadding, textColor, getOnChange, onChange, label, minWidth, style } = props
    const theme = useContext(themeContext);


    useEffect(() => {
        if (getSetValue) {
            getSetValue(setValue);
        } 
    });

    const handleChange = (event,activateRed) => {
        if (onChange) onChange(event.target.value);
        setState({value:event.target.value});
        update();
        if (customValidation) {
            if (customValidation(event.target.value) === 1) {
                setState(state => ({ ...state, isValid: 1 }));
                if(getOnChange) getOnChange({isValid: 1,val: event.target.value,name});
            } else {
                setState(state => ({ ...state, isValid: activateRed ? 0 : -1 }));
                if(getOnChange) getOnChange({isValid: activateRed ? 0 : -1,val: event.target.value,name});
            }
        }
        else if (contentType) {
            if (f.validateField(event.target.value,contentType) === 1) {
                setState(state => ({ ...state, isValid: 1 }));
                if(getOnChange) getOnChange({isValid: 1,val: event.target.value,name});
            } else {
                setState(state => ({ ...state, isValid: activateRed ? 0 : -1 }));
                if(getOnChange) getOnChange({isValid: activateRed ? 0 : -1,val: event.target.value,name});
            }
            update();
            
        }
        

    }

    const handleBlur = event => {
        if (onBlur) onBlur(event.target.value);
        if (type) {
            event.target.value = f.formatField(event.target.value,type);
            handleChange(event,true);
        }
    }

    const setValue = (val) => {
        setState({value:val});
        update();
    }

    return (
        <div style={{paddingTop:vPadding || null,paddingBottom:vPadding || null,...containerStyle}}>
            {label ? <Label for={name}>{label}</Label> : null}
            <InputComponent 
                {...props}
                name={name}
                type={type || "text"}
                value={state.value}
                style={{
                    color: textColor || theme.colors.text,
                    minWidth: minWidth,
                    width: width,
                    textTransform: textTransform || "none",
                    boxShadow: state.isValid === 0 || valid === 0 ? "inset 0px 0px 0px 2px "+theme.colors.error : (state.isValid === 1 || valid === 1 ? "inset 0px 0px 0px 2px "+theme.colors.success : "none"),
                    ...style
                }}
                onBlur={handleBlur}
                {...(!props.noOnChange && { onChange: event => {handleChange(event)} } )}
            />
        </div>
    );
};



export default Input;