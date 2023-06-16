import { css } from 'glamor';
import theme from '../../theme';

/**************************/
/***** ICON STYLE *****/
/**************************/

var menu = css({
    position:"fixed",
    top:0,
    right: -500,
    height:"100vh",
    minWidth:300,
    width:"70%",
    maxWidth:500,
    backgroundColor: theme.content.navBar.mobileMenu.bgColor || theme.colors.color2,
    boxShadow:"-10px 0px 15px rgba(0,0,0,0.15)",
    transition: theme.content.navBar.transition
});

var menuCloseIconContainer = css({
    height: theme.content.navBar.height,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
});

var menuItemContainer = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.content.navBar.mobileMenu.marginTop,
});

var bg = css({
    position:"fixed",
    top:0,
    left:0,
    height:"100vh",
    width:"100vw",
    cursor: "pointer",
    backgroundColor: "black",
    opacity:0,
    transition: theme.content.navBar.bgTransition
});






var style = {
    menu,
    menuItemContainer,
    bg,
    menuCloseIconContainer
}


export default style;