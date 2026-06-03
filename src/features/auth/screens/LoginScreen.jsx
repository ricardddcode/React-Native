import {
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Alert
} from "react-native";

import { useForm, Controller } from "react-hook-form";
import { COLORS, SPACING, FONT_SIZE } from "../../../shared/constants/theme.js";
import Input from "../../../shared/components/common/Input.jsx";
import Button from "../../../shared/components/common/Button.jsx";

import kinalSportsLogo from "../../../../assets/kinal_sports.png";

const LoginScreen = ({ navigation }) => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            emailOrUsername: "",
            password: "",
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Image
                        source={kinalSportsLogo}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.subtitle}>Bienvenido de nuevo</Text>
                </View>

                <View style={styles.form}>
                    <Controller
                        control={control}
                        rules={{ required: "Email o usuario requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Usuario o correo"
                                placeholder="correo@ejemplo.com o usuario"
                                onChangeText={onChange}
                                value={value}
                                error={errors.emailOrUsername?.message}
                            />
                        )}
                          name="emailOrUsername"
                    />

                    <Controller
                        control={control}
                        name="password"
                        rules={{ required: "La contraseña es requerida" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Contraseña"
                                placeholder="Ingresa tu contraseña"
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                error={errors.password?.message}
                            />
                        )}
                    />

                    <Button
                        title="Iniciar sesión"
                        onPress={handleSubmit(onSubmit)}
                        style={styles.button}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        flexGrow: 1,
        padding: SPACING.xl,
        justifyContent: "center",
    },
    header: {
        alignItems: "center",
        marginBottom: SPACING.xxl,
    },
    logo: {
        height: 80,
        width: 200,
        marginBottom: SPACING.sm,
    },
    subtitle: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.secondary,
        marginTop: SPACING.sm,
    },
    form: {
        width: "100%",
    },
    button: {
        marginTop: SPACING.lg,
    },
});

export default Input;