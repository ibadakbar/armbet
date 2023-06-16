import React from "react";
import { css } from "glamor";
import theme from "../../theme";
//import style from "./style";

const RowLayout = ({ children, justify, mobileCenter, wrap, col, align }) => {
	var container = css({
		display: "flex",
		width: "100%",
		maxWidth: theme.maxWidth,
		flexWrap: "wrap",
		height: "100%",
		flexDirection: "row",
		justifyContent: justify || null,
		alignItems: align || "center",
		"@media(max-width: 1020px)": {
			justifyContent: mobileCenter ? "center" : null,
		},
		"@media(max-width: 768px)": {
			flexDirection: mobileCenter ? "column" : "row",
			justifyContent: mobileCenter ? "center" : null,
			alignItems: "center",
		},
	});

	var style = {
		container,
	};

	return (
		<div className={style.container} style={{}}>
			{children}
		</div>
	);
};

export default RowLayout;
