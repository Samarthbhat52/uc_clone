import React, { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Redirect, Tabs } from "expo-router";
import { lightTheme, darkTheme } from "@/constants/Colors";

import { useColorScheme } from "react-native";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const LOGGED_IN = false;

export default function Page() {
	const colorScheme = useColorScheme();
	if (!LOGGED_IN) return <Redirect href={"/(auth)/onboarding"} />;
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
