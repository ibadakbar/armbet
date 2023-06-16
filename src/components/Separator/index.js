import React, { useContext } from 'react';
import { themeContext } from '../../theme/Provider';


const Separator = ({ h, w }) => {
    const theme = useContext(themeContext);
    return (
        <div style={{height: theme.spacers[h] || theme.spacers[0], width: theme.spacers[w] || theme.spacers[0]}}/>
    );
};



export default Separator;