import { Theme } from "@/constants/Colors";
import { createBox } from "@shopify/restyle";
import { SafeAreaView, ViewProps } from "react-native";

export const SafeArea = (props: ViewProps) => {
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
