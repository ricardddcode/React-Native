import {
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    Alert,
    TouchableOpacity,
} from "react-native";

import { useForm, Controller } from "react-hook-form";
import { COLORS, SPACING, FONT_SIZE } from "../../../shared/constants/theme";
import Input from "../../../shared/components/common/Input";
import Button from "../../../shared/components/common/Button";
import kinalSportsLogo from "../../../../assets/kinal_sports.png";

const RegisterScreen = ({ navigation }) => {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
        },
    });

    const password = watch("password");

    const onSubmit = (data) => {
        console.log(data);
        Alert.alert("Registro", "Cuenta creada correctamente");
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>

                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.backText}>Volver</Text>
                    </TouchableOpacity>

                    <Image
                        source={kinalSportsLogo}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.subtitle}>Crear cuenta</Text>
                </View>

                <View style={styles.form}>
                    <Controller
                        control={control}
                        name="fullName"
                        rules={{ required: "El nombre completo es obligatorio" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Nombre completo"
                                placeholder="Tu nombre completo"
                                onChangeText={onChange}
                                value={value}
                                error={errors.fullName?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="email"
                        rules={{
                            required: "El correo es obligatorio",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Correo electrónico inválido",
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Correo electrónico"
                                placeholder="correo@ejemplo.com"
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                error={errors.email?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="username"
                        rules={{
                            required: "El usuario es obligatorio",
                            minLength: {
                                value: 3,
                                message: "Mínimo 3 caracteres",
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Nombre de usuario"
                                placeholder="usuario123"
                                onChangeText={onChange}
                                value={value}
                                autoCapitalize="none"
                                error={errors.username?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="password"
                        rules={{
                            required: "La contraseña es obligatoria",
                            minLength: {
                                value: 6,
                                message: "Mínimo 6 caracteres",
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Contraseña"
                                placeholder="Mínimo 6 caracteres"
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                error={errors.password?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="confirmPassword"
                        rules={{
                            required: "Confirma tu contraseña",
                            validate: (value) =>
                                value === password || "Las contraseñas no coinciden",
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Confirmar contraseña"
                                placeholder="Repite tu contraseña"
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                error={errors.confirmPassword?.message}
                            />
                        )}
                    />

                    <Button
                        title="Crear cuenta"
                        onPress={handleSubmit(onSubmit)}
                        style={styles.button}
                    />
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>¿Ya tienes cuenta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.link}>Inicia sesión</Text>
                    </TouchableOpacity>
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
        marginBottom: SPACING.xl,
    },
    logo: {
        width: 200,
        height: 80,
        marginBottom: SPACING.sm,
    },
    subtitle: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.secondary,
        marginTop: SPACING.sm,
    },
    backButton: {
        position: "absolute",
        left: 0,
        top: 0,
        padding: SPACING.sm,
    },
    backText: {
        color: COLORS.primary,
        fontWeight: "700",
    },
    form: {
        width: "100%",
        backgroundColor: COLORS.surface,
        borderRadius: 12,
        padding: SPACING.lg,
    },
    button: {
        marginTop: SPACING.md,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: SPACING.xl,
    },
    footerText: {
        fontSize: FONT_SIZE.md,
        color: COLORS.surface,
        opacity: 0.85,
    },
    link: {
        fontSize: FONT_SIZE.md,
        color: COLORS.surface,
        fontWeight: "700",
    },
});

export default RegisterScreen;