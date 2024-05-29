import React, { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { lightTheme, darkTheme } from "@/constants/Colors";

import { useColorScheme } from "react-native";
import { router } from "expo-router";

// TODO: Replace with auth logic later on
const LOGGED_IN = false;

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

useEffect(() => {
	if (!LOGGED_IN) {
		router.replace("/(auth)/onboarding");
	}
}, []);

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor:
					colorScheme === "light"
						? lightTheme.colors.mainForeground
						: darkTheme.colors.mainForeground,
				tabBarStyle: {
					backgroundColor:
						colorScheme === "light"
							? lightTheme.colors.mainBackground
							: darkTheme.colors.mainBackground,
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Tab One",
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="two"
				options={{
					title: "Tab Two",
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				}}
			/>
		</Tabs>
	);
}
