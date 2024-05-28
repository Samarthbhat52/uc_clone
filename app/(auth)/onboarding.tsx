import { Container } from "@/components/global/Container";
import { SafeArea } from "@/components/global/StyledSafeArea";
import { TextComponent } from "@/components/global/StyledText";
import Colors from "@/constants/Colors";
import { BlurView } from "expo-blur";
import { normalize } from "@/constants/Size";
import { StyleSheet, Text, View } from "react-native";
const OnboardingPage = () => {
	return (
		<SafeArea>
			<View style={{ flex: 2, backgroundColor: "gray" }}></View>
			<BlurView
				intensity={100}
				style={{
					height: normalize(300, "height"),
					borderRadius: 20,
				}}
			></BlurView>
		</SafeArea>
	);
};
export default OnboardingPage;
const styles = StyleSheet.create({});
