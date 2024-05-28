import Colors from "@/constants/Colors";
import { normalize } from "@/constants/Size";
import { Text, TextProps } from "react-native";
import { useColorScheme } from "react-native";

export const Heading = (props: TextProps) => {
	const colorScheme = useColorScheme();
	return (
		<Text
			{...props}
			style={[
				props.style,
				{
					fontFamily: "LibreBaskervilleBold",
					color: Colors[colorScheme ?? "light"].text,
					fontSize: normalize(28, "height"),
				},
			]}
		>
			{props.children}
		</Text>
	);
};
