import { css } from 'glamor';
import theme from "../../theme";

/**************************/
/***** TWO COLUMN STYLE *****/
/**************************/

var container = css({
    display:"flex",
    justifyContent:"space-between", 
    width: "100%", 
    maxWidth: theme.maxWidth,
    height:"100%"
});




var style = {
    container,
}


export default style;