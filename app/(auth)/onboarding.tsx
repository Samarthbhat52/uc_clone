import TransparentView from "@/components/global/TransparentView";
import { Theme } from "@/constants/Colors";
import { normalize } from "@/constants/Size";
import { globalStyles } from "@/constants/Styles";
import { createText, createBox } from "@shopify/restyle";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useColorScheme } from "react-native";
import { useRouter } from "expo-router";

const OnboardingPage = () => {
	const Text = createText<Theme>();
	const Box = createBox<Theme>();
	const colorScheme = useColorScheme();
	const router = useRouter();

	return (
		<TransparentView
			style={[
				globalStyles.container,
				{ paddingHorizontal: 0, paddingVertical: 0, position: "relative" },
			]}
		>
			<View style={styles.imageStyle}>
				<Text>Some image</Text>
			</View>
			<Box backgroundColor="bottomCardColor" style={styles.bottomBarStyle}>
				<View style={{ alignItems: "center", gap: normalize(20, "height") }}>
					<Text variant="title">
						Get your laundry & dry cleaning within 24 hours
					</Text>
					<Text
						style={{ textAlign: "center", maxWidth: normalize(290, "width") }}
					>
						A convenient laundry solution that helps protect the environment
					</Text>
				</View>
				<TouchableOpacity
					onPress={() => router.push("/login")}
					style={
						colorScheme == "light"
							? globalStyles.primaryButtonLight
							: globalStyles.primaryButtonDark
					}
				>
					<Text variant="button">Let's Start</Text>
				</TouchableOpacity>
			</Box>
		</TransparentView>
	);
};

const styles = StyleSheet.create({
	imageStyle: {
		flex: 1,
		backgroundColor: "lightgreen",
		justifyContent: "center",
		alignItems: "center",
	},
	bottomBarStyle: {
		paddingVertical: normalize(25, "height"),
		paddingHorizontal: normalize(25, "width"),
		height: 300,
		position: "absolute",
		bottom: 0,
		right: 0,
		left: 0,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		justifyContent: "space-between",
	},
});
export default OnboardingPage;
