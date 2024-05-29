import { createTheme } from "@shopify/restyle";
import { normalize } from "./Size";

export const palette = {
	lightOrange: "#f9821a",
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
	black: "#180e02",
	darkBrown: "#231202",
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
	},
	textVariants: {
		defaults: {
			color: "mainForeground",
			fontSize: normalize(16, "height"),
			lineHeight: normalize(24, "height"),
			fontFamily: "Mukta",
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
	},
};
