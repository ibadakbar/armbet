import regex from "./regex";
import store from "../state/createStore";
import i18n from "../i18n";
import c from "./globals";
import { search } from "../state/reducer";

var timer = "";

const getImgUrl = (url) => {
	if (!url || typeof url !== "string") return "";

	if (url.indexOf("/png") !== -1 || url.indexOf("/jpeg") !== -1) return "";
	if (url.indexOf("file://") !== -1 || url.indexOf("/private") !== -1)
		return url;
	return (
		c.cdnString +
		"img/" +
		url
			.replace("/var/www/uploads/", "")
			.replace("/Users/harveyroberts/Documents/Armbet/Uploads/", "")
	);
};

const functions = {
	validateField: (text, type) => {
		if (!text) return -1;
		if (regex[type].test(text)) return 1;
		return 0;
	},
	changeLanguage: (lang) => {
		i18n.changeLanguage(lang);
		c.language = lang;
		//document.location.reload(true);
	},
	formatField: (text, type) => {
		if (!type) {
			return text.trim();
		} else if (type === "email") {
			return text.trim().toLowerCase();
		} else if (type === "fullName") {
			var splitText = text.toLowerCase().split(/\s+/);
			for (var i = 0; i < splitText.length; i++) {
				splitText[i] =
					splitText[i].charAt(0).toUpperCase() +
					splitText[i].substring(1);
			}
			return splitText.join(" ").trim();
		} else {
			return text.trim();
		}
	},
	scrollTo: (area) => {
		if (typeof window !== "undefined" && area) {
			window.scrollTo({
				top: area,
				behavior: "smooth",
			});
		}
	},
	searchTimer: (searchText, next, testConnection, searchArgs) => {
		function startTimer() {
			timer = searchText.length;
			setTimeout(async () => {
				if (
					timer === searchText.length &&
					searchText.trim().length > 0
				) {
					if (searchArgs) {
						try {
							var searchResults = await store.dispatch(
								search(searchArgs)
							);
						} catch (err) {
							console.warn("search err : ", err);
						}
						next(searchResults);
					} else {
						next();
					}
				}
			}, 500);
		}
		startTimer();
	},
	getProfilePhoto: (photo, size) => {
		if (photo) {
			return {
				uri:
					getImgUrl(photo) +
					(size
						? "?width=" + size.width + "&height=" + size.height
						: ""),
			};
		}
		return require("../assets/images/user_profile_placeholder.png");
	},
	getImgUrl,
};

export default functions;
