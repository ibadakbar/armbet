import React, { useContext } from "react";
import { Link } from "gatsby";
import Button from "../../components/Button";
import SectionContainer from "../../containers/SectionContainer";
import { themeContext } from "../../theme/Provider";
import useForceUpdate from "use-force-update";
import style from "./style";
import trans from "../../i18n";
import store from "../../state/createStore";
import { setLanguage } from "../../state/reducer";
import { useTranslation } from "react-i18next";

var showLanguageMenu = false;

const Footer = ({ bgColor, vPadding }) => {
	const theme = useContext(themeContext);
	const update = useForceUpdate();
	const { t } = useTranslation();

	const toggleLanguageMenu = () => {
		showLanguageMenu = !showLanguageMenu;
		update();
	};

	return (
		<SectionContainer bgColor={bgColor} vPadding={vPadding} id="footer">
			<div className={style.container}>
				<img
					src={require("../../assets/images/logo_white.png")}
					alt="Armbet logo white"
					style={{ height: 45, marginBottom: 10 }}
				/>
				<Button
					isText
					onClick={() => {
						toggleLanguageMenu();
					}}
					style={{ display: "block" }}
					color="white">
					{trans.t("changelanguage")}
					<img
						src={require("../../assets/images/dropdown_arrow_white.png")}
						alt="Dropdown arrow"
						style={{ marginLeft: "7px", marginTop: "9px" }}
						height="7px"
					/>
					<div
						className={style.languagesBox}
						style={{
							display: showLanguageMenu ? "block" : "none",
						}}>
						{theme.languages.map((lang, index) => (
							<button
								className={style.languageElement}
								onClick={() => {
									toggleLanguageMenu();
									store.dispatch(setLanguage(lang.name));
								}}
								style={{
									padding: "10px",
									cursor: "pointer",
									backgroundColor: "transparent",
									display: "block",
								}}>
								{t(lang.text)}
							</button>
						))}
					</div>
				</Button>
				<Link to="careers">
					<Button isText onClick={() => {}} color="white">
						Careers
					</Button>
				</Link>
				<Link to="terms-and-conditions">
					<Button isText onClick={() => {}} color="white">
						{trans.t("userterms")}
					</Button>
				</Link>

				<Link to="privacy-policy">
					<Button isText onClick={() => {}} color="white">
						{trans.t("privacypolicy")}
					</Button>
				</Link>

				<p
					style={{
						color: "white",
						fontSize: 12,
						position: "absolute",
						bottom: -85,
					}}>
					{trans.t("copyrightmessage")}
				</p>
			</div>
		</SectionContainer>
	);
};

export default Footer;
