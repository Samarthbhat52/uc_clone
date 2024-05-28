import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(main)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		Mukta: require("../assets/fonts/Mukta-Regular.ttf"),
		MuktaMedium: require("../assets/fonts/Mukta-Medium.ttf"),
		MuktaSemiBold: require("../assets/fonts/Mukta-SemiBold.ttf"),
		MuktaBold: require("../assets/fonts/Mukta-Bold.ttf"),
		LibreBaskerville: require("../assets/fonts/LibreBaskerville-Regular.ttf"),
		LibreBaskervilleBold: require("../assets/fonts/LibreBaskerville-Bold.ttf"),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	return (
		<Stack>
			<Stack.Screen name="(auth)" options={{ headerShown: false }} />
			<Stack.Screen name="(main)" options={{ headerShown: false }} />
		</Stack>
	);
}
