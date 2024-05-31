import { darkTheme, lightTheme } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useColorScheme, TouchableOpacity } from "react-native";

const AuthLayout = () => {
	const colorScheme = useColorScheme();
	const router = useRouter();

	return (
		<Stack>
			<Stack.Screen name="onboarding" options={{ headerShown: false }} />
			<Stack.Screen
				name="login"
				options={{
					title: "",
					headerShadowVisible: false,
					headerStyle: {
						backgroundColor:
							colorScheme == "light"
								? lightTheme.colors.mainBackground
								: darkTheme.colors.mainBackground,
					},
					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()}>
							<Ionicons
								size={34}
								name="arrow-back"
								color={
									colorScheme == "light"
										? lightTheme.colors.mainForeground
										: darkTheme.colors.mainForeground
								}
							/>
						</TouchableOpacity>
					),
				}}
			/>
			<Stack.Screen name="enter-otp" />
			<Stack.Screen name="(main)" options={{ headerShown: false }} />
		</Stack>
	);
};
export default AuthLayout;
