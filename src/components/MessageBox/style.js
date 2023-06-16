import { css } from 'glamor';

/**************************/
/***** ICON STYLE *****/
/**************************/

var container = css({
    position: "fixed",
	zIndex: 9,
	top:0,
	height: "100vh",
	width: "100vw",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "rgba(0,0,0,0.6)",
	opacity:0,
	transition: "300ms all"
});

var messageBox = css({
	backgroundColor: "white",
	width: "25vw",
	minWidth: "250px",
	display: "flex",
	flexDirection: "column",
	opacity:0,
	alignItems: "center",
	justifyContent: "space-between",
	padding: "30px 20px",
	borderRadius: 20,
	transition: "400ms all"
});



var style = {
	container,
	messageBox
}


export default style;


/*.box {
	background-color: white;
	width: 25vw;
	min-width: 250px;
	height: 250px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-top: 30px;
	padding-bottom: 25px;
	border-radius: 10px;
}

.ok-button {
	cursor: pointer;
	align-self: center;
	outline: none;
	background: rgb(238, 238, 238);
	color: rgb(71, 71, 71);
	font-size: 17px;
	font-weight: 500;
	border-radius: 3px;
	border: none;
	width: 200px;
	height: 45px;
	border-radius: 500px;
	transition: all 200ms;
	box-shadow: 0px 5px 6px 0px rgba(68, 68, 68, 0.4);
}
.ok-button:hover {
	margin-top: 2px;
	width: 198px;
	height: 43px;
	transition: all 200ms;
	box-shadow: 0px 3px 5px 0px rgba(68, 68, 68, 0.4);
}
.ok-button:active {
	margin-top: 2px;
	width: 198px;
	height: 43px;
	transition: all 200ms;
	box-shadow: 0px 1px 0px 0px rgba(68, 68, 68, 0.4);
}
*/