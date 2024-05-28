import Colors from "@/constants/Colors";
import { useColorScheme } from "react-native";
import {
	SafeAreaView,
	SafeAreaProviderProps,
} from "react-native-safe-area-context";

export const SafeArea = (props: SafeAreaProviderProps) => {
	const colorScheme = useColorScheme();
	return (
		<SafeAreaView
			{...props}
			style={[
				props.style,
				{ flex: 1, backgroundColor: Colors[colorScheme ?? "light"].background },
			]}
		>
			{props.children}
		</SafeAreaView>
	);
};
