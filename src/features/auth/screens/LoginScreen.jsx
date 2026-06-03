import {
    View,
    Text,
    StyleSheet,
    Image,
    KeyBoardAvoidingView,
    Platform,
    ScrollView,
    Alert
} from "react-native";
 
import { useForm, Controller } from "react-hook-form";
import { COLORS, SPACING, FONT_SIZE } from "../../../shared/constants/theme.js";
import Input from "../../../shared/components/common/Input.jsx";
import Button from "../../../shared/components/common/Button.jsx";
 
import kinalSportsLogo from "../../../../assets/kinal_sports.png";
import { ScrollView } from "react-native/types_generated/index";
 
const LoginScreen = ({navigation}) => {
 
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            emailOrUsername: "",
            password: "",
        }
    });
 
    const onSubmit = (data) => {
 
    }
   
    return (
        <KeyBoardAvoidingView
            behavior={platform.OS === "ios" ? "padding" : "height"}
            style = {StyleSheet.container}
            >
                <ScrollView contetContainerStyle={StyleSheet.scrollContainer}>
                    <View style={Styles.header}>
                    <image
                    source={kinalSportsLogo}
                    style={StyleSheet.logo}
                    resizeMode="contain"    
                    />  
                    <text style ={Styles.subtitle}>Bienvenido de nuevo </text>
                    </View>
                </ScrollView>
                    </KeyBoardAvoidingView>
    )
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
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: SPACING.xl,
  },
  footerText: {
    fontSize: FONT_SIZE.md,
    color: COLORS.textLight,
  },
  link: {
    fontSize: FONT_SIZE.md,
    color: COLORS.primary,
    fontWeight: "700",
  },
});
 
export default LoginScreen;
 