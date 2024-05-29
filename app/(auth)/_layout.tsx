import { Stack } from "expo-router";
const AuthLayout = () => {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="onboarding" />
			<Stack.Screen name="login" />
			<Stack.Screen name="enter-otp" />
		</Stack>
	);
};
export default AuthLayout;
