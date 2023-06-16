import React, { useContext } from "react";
import { themeContext } from "../../theme/Provider";
import Wrapper from "../Wrapper";
import { css } from "glamor";

const SectionContainer = ({
	children,
	fullscreen,
	wrapperStyle,
	bgColor,
	vPadding,
	className,
	id,
	minFullscreen,
	style,
}) => {
	const theme = useContext(themeContext);

	const containerStyle = css({
		height:
			fullscreen && !minFullscreen
				? "calc(100vh - " + theme.content.navBar.height + ")"
				: null,
		minHeight: minFullscreen
			? "calc(100vh - " + theme.content.navBar.height + ")"
			: null,
		"@media(max-width: 768px)": {
			height: "auto",
		},
	});

	return (
		<div
			className={
				"hPadding sectionVPadding " +
				containerStyle +
				" " +
				(className || "")
			}
			id={id}
			style={{
				backgroundColor: bgColor || null,
				paddingTop: vPadding || null,
				paddingBottom: vPadding || null,
				position: "relative",
				...style,
			}}>
			<Wrapper style={wrapperStyle}>{children}</Wrapper>
		</div>
	);
};

export default SectionContainer;
