import { StyleSheet } from "react-native";
import { normalize } from "./Size";
import { darkTheme, lightTheme } from "./Colors";

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: normalize(20, "height"),
		paddingHorizontal: normalize(15, "width"),
	},
	primaryButtonLight: {
		width: "100%",
		paddingHorizontal: normalize(10, "width"),
		paddingVertical: normalize(15, "height"),
		alignItems: "center",
		backgroundColor: lightTheme.colors.primaryButton,
		borderRadius: 10,
	},
	primaryButtonDark: {
		width: "100%",
		paddingHorizontal: normalize(10, "width"),
		paddingVertical: normalize(15, "height"),
		alignItems: "center",
		backgroundColor: darkTheme.colors.primaryButton,
		borderRadius: 10,
	},
});
