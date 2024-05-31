import { SafeArea } from "@/components/global/StyledSafeArea";
import TransparentView from "@/components/global/TransparentView";
import { Theme, darkTheme, lightTheme } from "@/constants/Colors";
import { normalize } from "@/constants/Size";
import { globalStyles } from "@/constants/Styles";
import { createText } from "@shopify/restyle";
import {
	StyleSheet,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	View,
	useColorScheme,
	Platform,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

const LoginPage = () => {
	const Text = createText<Theme>();
	const colorScheme = useColorScheme();

	const phoneRegex = /^(\+91|\+91\-|0)?[789]\d{9}$/;
	const phoneSchema = yup.object({
		phone: yup
			.string()
			.required()
			.matches(phoneRegex, "Enter valid phone number"),
	});

	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior="padding"
			keyboardVerticalOffset={
				Platform.OS == "ios" ? normalize(90, "height") : 0
			}
		>
			<SafeArea>
				<TransparentView style={globalStyles.container}>
					<Formik
						initialValues={{ phone: "" }}
						validationSchema={phoneSchema}
						onSubmit={(values) => {
							// console.log(values);
						}}
					>
						{(props) => (
							<View style={{ flex: 1, justifyContent: "space-between" }}>
								<View style={{ gap: normalize(24, "height") }}>
									<Text
										variant="heading"
										style={{
											textAlign: "left",
											fontSize: normalize(34, "height"),
										}}
									>
										Let's get started!
									</Text>
									<Text>
										Enter your phone number. We will send you a conformation
										code there.
									</Text>

									<View style={styles.formContainer}>
										<View
											style={[
												styles.input,
												colorScheme == "light" ? styles.lightIp : styles.darkIp,
											]}
										>
											<Text style={{ fontSize: normalize(22, "height") }}>
												+91
											</Text>
										</View>
										<TextInput
											autoCapitalize="none"
											inputMode="numeric"
											placeholder="Mobile Number"
											maxLength={10}
											style={[
												styles.input,
												{ flex: 1 },
												colorScheme == "light" ? styles.lightIp : styles.darkIp,
												props.touched.phone && props.errors.phone && props.dirty
													? { borderColor: "red" }
													: {},
											]}
											onChangeText={props.handleChange("phone")}
											value={props.values.phone}
											onBlur={props.handleBlur("phone")}
										/>
									</View>
									{props.values.phone.length == 10 && props.errors.phone && (
										<View
											style={[
												styles.errorBg,
												{
													backgroundColor:
														colorScheme == "light"
															? lightTheme.colors.error
															: darkTheme.colors.error,
												},
											]}
										>
											<Text variant="error">{props.errors.phone}</Text>

											{/* <Text variant="error">Enter a valid phone number</Text> */}
										</View>
									)}
								</View>
								<TouchableOpacity
									onPress={() => props.handleSubmit()}
									style={
										colorScheme == "light"
											? globalStyles.primaryButtonLight
											: globalStyles.primaryButtonDark
									}
								>
									<Text variant="button">Log In</Text>
								</TouchableOpacity>
							</View>
						)}
					</Formik>
				</TransparentView>
			</SafeArea>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	formContainer: {
		flexDirection: "row",
		gap: normalize(10, "width"),
		marginTop: normalize(15, "height"),
	},
	input: {
		paddingHorizontal: normalize(20, "width"),
		paddingVertical: normalize(10, "height"),
		borderRadius: 10,
		fontFamily: "Poppins",
		fontSize: normalize(22, "height"),
	},
	lightIp: {
		backgroundColor: lightTheme.colors.secondaryCardBackground,
		color: lightTheme.colors.mainForeground,
	},
	darkIp: {
		backgroundColor: darkTheme.colors.secondaryCardBackground,
		color: darkTheme.colors.mainForeground,
	},
	errorBg: {
		paddingVertical: normalize(2, "height"),
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
	},
});

export default LoginPage;
