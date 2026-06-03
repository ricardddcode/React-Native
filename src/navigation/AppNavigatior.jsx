import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { COLORS, SPACING, FONT_SIZE } from "../shared/constants/theme";
import AuthStack from "./AuthStack";

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: SPACING.md,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    buttonPrimary: {
        backgroundColor: COLORS.primary,
    },
    buttonSecondary: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    buttonDisabled: {
        opacity: 0.6,
    },
    text: {
        fontSize: FONT_SIZE.md,
        fontWeight: "700",
    },
    textPrimary: {
        color: COLORS.surface,
    },
    textSecondary: {
        color: COLORS.primary,
    },
});

export default AppNavigator;