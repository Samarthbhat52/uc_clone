import { createTheme } from "@shopify/restyle";
import { normalize } from "./Size";

export const palette = {
	lightOrange: "#EB9345",
	darkOrange: "#f9b473",
	lightGreen: "#9ad5b6",
	darkGreen: "#82a209",
	lightBlue: "#644cf0",
	darkBlue: "#4174d2",

	lightCardPrimary: "#fdf4ed",
	darkCardPrimary: "#2c1a06",
	lightCardSecondary: "#e9f3ea",
	darkCardSecondary: "#362f05",

	white: "#fcfaf8",
	cream: "#f4ece6",
	creamFaded: "#f4ece685",

	black: "#180e02",
	darkBrown: "#231202",
	darkBrownFaded: "#23120285",

	errorLight: "#cf6679",
	errorDark: "#b00020",
};

export const lightTheme = createTheme({
	spacing: {
		sm: 8,
		md: 16,
	},
	colors: {
		mainBackground: palette.white,
		mainForeground: palette.black,

		primaryCardBackground: palette.lightCardPrimary,
		secondaryCardBackground: palette.lightCardSecondary,

		primaryButton: palette.lightOrange,
		secondaryButton: palette.lightGreen,

		buttonTextColor: palette.black,
		bottomCardColor: palette.creamFaded,

		error: palette.errorLight,
	},
	textVariants: {
		defaults: {
			color: "mainForeground",
			fontSize: normalize(16, "height"),
			fontFamily: "Poppins",
		},
		heading: {
			fontFamily: "PoppinsBold",
			fontSize: normalize(24, "height"),
		},
		title: {
			fontFamily: "LibreBaskervilleBold",
			fontSize: normalize(26, "height"),
			textAlign: "center",
		},
		button: {
			fontFamily: "PoppinsBold",
			fontSize: normalize(18, "height"),
			color: "buttonTextColor",
		},
		error: {
			color: "mainBackground",
		},
	},
});

export type Theme = typeof lightTheme;

export const darkTheme: Theme = {
	...lightTheme,
	colors: {
		...lightTheme.colors,
		mainBackground: palette.darkBrown,
		mainForeground: palette.cream,

		primaryCardBackground: palette.darkCardPrimary,
		secondaryCardBackground: palette.darkCardSecondary,

		primaryButton: palette.darkOrange,
		secondaryButton: palette.darkGreen,

		buttonTextColor: palette.darkBrown,
		bottomCardColor: palette.darkBrownFaded,

		error: palette.errorDark,
	},
};
