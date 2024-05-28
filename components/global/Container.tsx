import { View, ViewProps } from "react-native";
import { normalize } from "@/constants/Size";
import { useColorScheme } from "react-native";
import Colors from "@/constants/Colors";

export const Container = (props: ViewProps) => {
	const colourScheme = useColorScheme();

	return (
		<View
			{...props}
			style={[
				props.style,
				{
					paddingVertical: normalize(20, "height"),
					paddingHorizontal: normalize(15, "width"),
					flex: 1,
					backgroundColor: Colors[colourScheme ?? "light"].background,
				},
			]}
		>
			{props.children}
		</View>
	);
};
