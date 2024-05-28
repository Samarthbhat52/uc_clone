import Colors from "@/constants/Colors";
import { normalize } from "@/constants/Size";
import {
	TouchableOpacity,
	TouchableOpacityProps,
	StyleSheet,
	Text,
	useColorScheme,
} from "react-native";

type Variant = "primary" | "secondary";
type Theme = "light" | "dark";

const Button = (
	props: TouchableOpacityProps & { variant?: Variant; text?: string }
) => {
	const THEME = useColorScheme();

	return (
		<TouchableOpacity
			{...props}
			style={[
				props.style,
				styles().default,
				props.variant && props.variant == "secondary"
					? styles(THEME ?? "light").secondary
					: styles(THEME ?? "light").primary,
			]}
		>
			<Text
				style={[
					styles().defaultText,
					props.variant == "secondary"
						? styles(THEME ?? "light").secondaryText
						: styles(THEME ?? "light").primaryText,
				]}
			>
				{props.text}
			</Text>
			{props.children}
		</TouchableOpacity>
	);
};

const styles = (theme: Theme = "light") => {
	return StyleSheet.create({
		default: {
			borderRadius: 10,
			paddingHorizontal: normalize(25, "width"),
			paddingVertical: normalize(10, "height"),
			alignItems: "center",
			textTransform: "capitalize",
		},
		primary: {
			backgroundColor: Colors[theme].primary,
		},
		secondary: {
			backgroundColor: Colors[theme].secondary,
			color: Colors[theme].text,
		},
		defaultText: {
			fontSize: normalize(22, "height"),
			fontFamily: "MuktaSemiBold",
		},
		primaryText: {
			color: Colors["light"].text,
		},
		secondaryText: {
			color: Colors[theme].text,
		},
	});
};

export default Button;
