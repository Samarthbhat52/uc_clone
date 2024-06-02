import { SafeArea } from "@/components/global/StyledSafeArea";
import TransparentView from "@/components/global/TransparentView";
import { globalStyles } from "@/constants/Styles";
import { Fragment, useEffect, useState } from "react";
import { createText } from "@shopify/restyle";
import { Theme } from "@/constants/Colors";
import { normalize } from "@/constants/Size";
import { Platform, StyleSheet, View } from "react-native";
import { useColorScheme } from "react-native";
import { useLocalSearchParams } from "expo-router";
import {
	CodeField,
	Cursor,
	useBlurOnFulfill,
	useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 6;

const EnterOtp = () => {
	const Text = createText<Theme>();
	const colorScheme = useColorScheme();
	const { phone } = useLocalSearchParams<{ phone: string }>();

	const [code, setCode] = useState("");
	const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value: code,
		setValue: setCode,
	});

	useEffect(() => {
		if (code.length == 6) {
			console.log(code);
		}
	}, [code]);

	return (
		<SafeArea>
			<TransparentView style={globalStyles.container}>
				<View style={{ gap: normalize(24, "height") }}>
					<Text
						variant="heading"
						style={{
							textAlign: "left",
							fontSize: normalize(34, "height"),
						}}
					>
						OTP Verification
					</Text>
					<Text>
						Enter the code sent to{" "}
						<Text fontFamily="PoppinsBold">+91-{phone}</Text>
					</Text>

					<CodeField
						ref={ref}
						{...props}
						// Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
						value={code}
						onChangeText={setCode}
						cellCount={CELL_COUNT}
						rootStyle={styles.codeFieldRoot}
						keyboardType="number-pad"
						textContentType="oneTimeCode"
						testID="my-code-input"
						renderCell={({ index, symbol, isFocused }) => (
							<Fragment key={index}>
								<Text
									key={index}
									style={[
										globalStyles.input,
										colorScheme == "light"
											? globalStyles.lightIp
											: globalStyles.darkIp,
									]}
									onLayout={getCellOnLayoutHandler(index)}
								>
									{symbol || (isFocused ? <Cursor /> : null)}
								</Text>
								{index === 2 ? (
									<View
										key={`separator-${index}`}
										style={{ justifyContent: "center", alignItems: "center" }}
									>
										<Text
											style={{
												fontFamily: "PoppinsBold",
											}}
										>
											-
										</Text>
									</View>
								) : null}
							</Fragment>
						)}
					/>
				</View>
			</TransparentView>
		</SafeArea>
	);
};

const styles = StyleSheet.create({
	root: { flex: 1, padding: 20 },
	title: { textAlign: "center", fontSize: 30 },
	codeFieldRoot: { marginTop: 20 },
	cell: {
		width: 40,
		height: 40,
		lineHeight: 38,
		fontSize: 24,
		textAlign: "center",
	},
	focusCell: {
		borderColor: "#000",
	},
	input: {
		paddingHorizontal: normalize(20, "width"),
		paddingVertical: normalize(10, "height"),
		borderRadius: 10,
		fontFamily: "Poppins",
		fontSize: normalize(22, "height"),
	},
});

export default EnterOtp;
