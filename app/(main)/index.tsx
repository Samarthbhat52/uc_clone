import Button from "@/components/global/Button";
import { Container } from "@/components/global/Container";
import { Heading } from "@/components/global/Heading";
import { SafeArea } from "@/components/global/StyledSafeArea";
import { TextComponent } from "@/components/global/StyledText";
import { View } from "react-native";

const TabOne = () => {
	return (
		<SafeArea>
			<Container>
				<Heading>Hello</Heading>
				<View>
					<TextComponent>Test</TextComponent>
				</View>
				<Button text="Let's Start"></Button>
			</Container>
		</SafeArea>
	);
};
export default TabOne;
