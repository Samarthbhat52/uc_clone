import { View, ViewProps } from "react-native";

const TransparentView = (props: ViewProps) => {
	return (
		<View {...props} style={[props.style, { backgroundColor: "transparent" }]}>
			{props.children}
		</View>
	);
};

export default TransparentView;
