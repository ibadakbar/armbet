import { css } from 'glamor';
import theme from "../../theme";

/**************************/
/***** NAV BAR STYLE *****/
/**************************/

var container = css({
    background: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,.15)',
    width:"100%",
    height: theme.content.navBar.height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: theme.content.navBar.type,
    top:0,
    zIndex: theme.zIndex.front1,
});

var innerContainer = css({
    width: "100%",
    maxWidth: theme.maxWidth,
    display:'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    height: "100%"
});

var menuItemsContainer = css({
    display:'flex',
});

var containerAtTop = css({
    background: 'transparent',
    boxShadow: 'none'
});


var logo = css({
    height: "50%",
    cursor: "pointer"
});


var navBarStyle = {
    container,
    innerContainer,
    menuItemsContainer,
    containerAtTop,
    logo
}


export default navBarStyle;