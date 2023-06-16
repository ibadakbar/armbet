import React, { useEffect } from "react";
import { withTrans } from "../../i18n/withTrans";
import NavBar from "../../elements/NavBar";
import GlobalStyle from "../../theme/style";
import Footer from "../../elements/Footer";
import MessageBox from "../../components/MessageBox";
import SideDialogBox from "../../components/SideDialogBox";
import Loading from "../../components/Loading";
import theme from "../../theme";
import { Provider } from "react-redux";
import store from "../../state/createStore";
import { setLanguage, setLoading } from "../../state/reducer";

const Layout = ({ children, t, i18n, location }) => {
	useEffect(() => {
		store.dispatch(setLanguage(i18n.language.substring(0, 2), true));
	});

	var disable = false;
	if (location.href) {
		if (location.href.includes("/activate/")) {
			store.dispatch(setLoading({ type: "global" }));
			disable = true;
		}
	}
	if (!disable) {
		return (
			<Provider store={store}>
				<NavBar linkState={location} t={t} />
				{children}
				<Footer
					t={t}
					bgColor={theme.colors.color2}
					vPadding={theme.spacers[10]}
				/>
				<MessageBox t={t} />
				<SideDialogBox t={t} />
				<Loading t={t} />
				<GlobalStyle />
			</Provider>
		);
	}
	return (
		<Provider store={store}>
			{children}
			<Loading t={t} />
		</Provider>
	);
};

export default withTrans(Layout);
