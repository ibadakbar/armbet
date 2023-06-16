import React from "react";
import { withTheme } from "styled-components";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import style from "./style";
import f from "../../resources/functions";
import MobileMenu from "../MobileMenu";
import { withPrefix, navigate } from "gatsby";
import footerStyle from "../Footer/style";
import store from "../../state/createStore";
import { setLanguage } from "../../state/reducer";
import i18n from "../../i18n";

var scrollLevel = 0;

class Navbar extends React.Component {
	state = {
		atTop: true,
		showMobileMenu: false,
		mobileMenuHasGone: true,
		showLanguageMenu: false,
	};

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
		const { href } = this.props.linkState;
		const theme = this.props.theme;
		var url = new URL(href);
		if (url.searchParams.get("item")) {
			var index = Number(url.searchParams.get("item"));
			if (index) {
				var item = theme.content.navBar.items[index];
				setTimeout(() => {
					if (!item.onClick) return;
					f[item.onClick](
						theme.content[item.name]?.ref?.current?.offsetTop
					);
					window.history.replaceState({}, document.title, "/");
				}, 100);
			}
		}
		this.handleScroll();
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	toggleLanguageMenu = () => {
		this.setState({ showLanguageMenu: !this.state.showLanguageMenu });
	};

	handleScroll = (event) => {
		scrollLevel = window.pageYOffset;

		if (scrollLevel > 50 && this.state.atTop) {
			this.setState({ atTop: false });
		} else if (scrollLevel <= 50 && !this.state.atTop) {
			this.setState({ atTop: true });
		}
	};

	toggleMobileMenu = (open) => {
		if (open) {
			this.setState({ mobileMenuHasGone: !open });
			setTimeout(() => {
				this.setState({ showMobileMenu: open });
			}, 50);
		} else {
			this.setState({ showMobileMenu: open });
			setTimeout(() => {
				this.setState({ mobileMenuHasGone: !open });
			}, 500);
		}
	};

	render() {
		var isHomepage;
		if (typeof window !== "undefined") {
			isHomepage = window.location.pathname === withPrefix("/");
		}

		const theme = this.props.theme;
		return (
			<div
				className={
					style.container +
					(this.state.atTop ? " " + style.containerAtTop : "")
				}
				id="header">
				<div className={style.innerContainer + " hPadding"}>
					<img
						src={theme.content.navBar.logo}
						className={style.logo}
						alt={theme.content.navBar.logoAlt || "Logo"}
						onClick={() => {
							navigate("/");
						}}
					/>
					<div className={style.menuItemsContainer}>
						<Icon
							className="tablet-only"
							iconStyle={{ height: "20px" }}
							onClick={() => {
								this.toggleMobileMenu(true);
							}}
							icon={theme.content.navBar.burgerIcon}
						/>
						{theme.content.navBar.items.map((item, index) => (
							<Button
								className="desktop-only"
								key={index}
								isText={item.type === "text"}
								color={
									item.type === "text"
										? theme.colors.color2
										: "white"
								}
								hoverStyle={item.hoverStyle}
								style={{ marginLeft: theme.spacers[7] }}
								onClick={() => {
									if (item.url)
										window.location.href = item.url;
									if (!item.onClick) return;
									if (isHomepage)
										f[item.onClick](
											theme.content[item.name].ref.current
												.offsetTop
										);
									else
										navigate("/?item=" + index, {
											state: {
												f: f[item.onClick],
												scroll: item.name,
											},
										});
								}}>
								{this.props.t(item.text)}
							</Button>
						))}
						<div style={{ position: "relative" }}>
							<Button
								className="desktop-only"
								isText
								onClick={() => {
									this.toggleLanguageMenu();
								}}
								style={{
									marginLeft: theme.spacers[7],
									textTransform: "uppercase",
								}}>
								{i18n.language.substring(0, 2)}
								<img
									src={require("../../assets/images/dropdown_arrow.png")}
									alt="Dropdown arrow"
									style={{
										marginLeft: "7px",
										marginTop: "9px",
									}}
									height="7px"
								/>
							</Button>
							<div
								className={`desktop-only ${footerStyle.languagesBox}`}								style={{
									boxShadow: "0 3px 4px rgba(0,0,0,.15)",
									height: "300px",
									overflowY: "auto",
									marginTop: "14px",
									marginLeft: "-70px",
									display: this.state.showLanguageMenu
										? "block"
										: "none",
								}}>
								{theme.languages.map((lang, index) => (
									<button
										className={footerStyle.languageElement}
										onClick={() => {
											this.toggleLanguageMenu();
											store.dispatch(
												setLanguage(lang.name)
											);
										}}
										style={{
											padding: "10px",
											textTransform: "capitalize",
											cursor: "pointer",
											backgroundColor: "transparent",
											display: "block",
										}}>
										{this.props.t(lang.text)}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
				<MobileMenu
					false={this.state.false}
					isHomepage={isHomepage}
					show={this.state.showMobileMenu}
					items={theme.content.navBar.items}
					mobileMenuHasGone={this.state.mobileMenuHasGone}
					onClick={() => {
						this.toggleMobileMenu(false);
					}}
				/>
			</div>
		);
	}
}

export default withTheme(Navbar);
