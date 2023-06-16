import React from "react";
import signUpFormStyle from "./style";
import theme from "../../theme";
import Input from "../../components/Input";
import AddressInput from "../../components/AddressInput";
import Label from "../../components/Label";
import Button from "../../components/Button";
import Row from "../../containers/Row";
import Separator from "../../components/Separator";
import Icon from "../../components/Icon";
import useForceUpdate from "use-force-update";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../../state/reducer";
import { navigate } from "gatsby";
import f from "../../resources/functions";

var form = {
	selectedGender: 0,
	email: { val: "", isValid: -1 },
	name: { val: "", isValid: -1 },
	address: { val: "", selectedAValue: null, isValid: -1 },
	password: { val: "", isValid: -1 },
	coordinates: null,
	homeCoordinates: null,
};

const SignUpForm = (props) => {
	const {
		email,
		password,
		coordinates,
		homeCoordinates,
		name,
		address,
		selectedGender,
	} = form;
	const { vPadding, t } = props;
	const { genders, stores } = theme.content.signUp;
	const update = useForceUpdate();
	const dispatch = useDispatch();
	const store = useSelector((store) => store);

	const selectGender = (value) => {
		form.selectedGender = value;
		update();
	};

	const validateFields = () => {
		return (
			email.isValid === 1 &&
			password.isValid === 1 &&
			name.isValid === 1 &&
			address.isValid === 1
		);
	};

	const onClickSignUp = async () => {
		form.email.val = f.formatField(form.email.val, "email");
		form.name.val = f.formatField(form.name.val, "fullName");
		if (validateFields()) {
			const toSend = {
				gender: genders[selectedGender].name,
				email: email.val,
				name: name.val,
				address: address.val,
				password: password.val,
				coordinates: {
					type: "Point",
					coordinates: [coordinates.lng, coordinates.lat],
					lat: coordinates.lat,
					lng: coordinates.lng,
				},
			};
			toSend.homeCoordinates = toSend.coordinates;
			try {
				var ok = await dispatch(signUp(toSend));
			} catch (err) {}
			if (ok) {
				navigate("/sign-up-success/");
			}
		}
	};

	const setFieldValue = (info) => {
		if (info.name) {
			form[info.name].val = info.val;
			form[info.name].isValid = info.isValid;
			if (info.coordinates) {
				form.coordinates = info.coordinates;
				form.homeCoordinates = info.homeCoordinates;
			}
			update();
		}
	};

	return (
		<div
			className={signUpFormStyle.container}
			style={{
				paddingTop: vPadding || null,
				paddingBottom: vPadding || null,
			}}>
			<div style={{ display: "flex" }}>
				{stores.map((store, index) => (
					<Icon
						bgColor={theme.colors["color2"]}
						iconStyle={{ height: "30px" }}
						onClick={() => {
							window.open(store.url, "_blank");
						}}
						hoverStyle={"background-color: " + theme.colors.color1}
						key={index}
						padding="18px"
						round
						icon={store.icon}
						containerStyle={{
							marginRight:
								index >= genders.length - 1
									? 0
									: theme.spacers[3],
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
						BottomElement={() => (
							<Label style={{ marginTop: 10 }}>
								{t(store.text)}
							</Label>
						)}
					/>
				))}
			</div>
		</div>
	);
};

export default SignUpForm;
