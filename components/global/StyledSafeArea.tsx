import { Theme } from "@/constants/Colors";
import { createBox } from "@shopify/restyle";
import {
	SafeAreaView,
	SafeAreaProviderProps,
} from "react-native-safe-area-context";

export const SafeArea = (props: SafeAreaProviderProps) => {
	const Box = createBox<Theme>();
	return (
		<Box style={{ flex: 1 }} backgroundColor="mainBackground">
			<SafeAreaView
				{...props}
				style={[
					props.style,
					{
						flex: 1,
						backgroundColor: "transparent",
					},
				]}
			>
				{props.children}
			</SafeAreaView>
		</Box>
	);
};
