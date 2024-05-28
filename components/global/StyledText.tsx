import Colors from "@/constants/Colors";
import { normalize } from "@/constants/Size";
import { Text, TextProps } from "react-native";
import { useColorScheme } from "react-native";

export const TextComponent = (props: TextProps) => {
	const colorScheme = useColorScheme();
	return (
		<Text
			{...props}
			style={[
				{
					fontFamily: "Mukta",
					fontSize: normalize(18, "height"),
					color: Colors[colorScheme ?? "light"].text,
				},
				props.style,
			]}
		>
			{props.children}
		</Text>
	);
};
