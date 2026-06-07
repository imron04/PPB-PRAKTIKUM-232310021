import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ADD_USER } from "./API";
import { Header } from "./components";
import { Buttons, InputText, TextPassword } from "./formUI";
import { style_auth } from "./styles";

const isValidEmail = (value) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();

    if (!trimmedUsername || !trimmedEmail || !password || !retypePassword) {
      Alert.alert("Error", "Semua field wajib diisi");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      Alert.alert("Error", "Format email tidak valid");
      return;
    }

    if (password !== retypePassword) {
      Alert.alert("Error", "Password dan re-type password tidak sama");
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        email: trimmedEmail,
        username: trimmedUsername,
        password,
      };

      const results = await ADD_USER(payload);
      console.log("Register response:", results);

      if (results.message || !results.data || !results.data.id) {
        Alert.alert("Error", "Gagal membuat akun");
        return;
      }

      await AsyncStorage.setItem(
        "registeredUser",
        JSON.stringify({ ...payload, id: results.data.id }),
      );

      Alert.alert("Success", "Akun berhasil dibuat", [
        {
          text: "OK",
          onPress: () => {
            router.replace("/module-latihan/latihan8/sign-in");
          },
        },
      ]);
    } catch (error) {
      console.error("Register error:", error);
      Alert.alert("Error", "Gagal membuat akun");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <StatusBar style="auto" barStyle={"dark-content"} hidden={false} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={style_auth.container}
      >
        <ScrollView
          contentContainerStyle={style_auth.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={style_auth.content}>
            <Header title={"Sign Up"} />

            <View style={style_auth.form}>
              <InputText
                data={username}
                setData={setUsername}
                placeholder="Username"
              />

              <InputText
                data={email}
                setData={setEmail}
                icon="mail-outline"
                placeholder="Email"
                keyboardType="email-address"
              />

              <TextPassword password={password} setPassword={setPassword} />

              <TextPassword
                password={retypePassword}
                setPassword={setRetypePassword}
                placeholder="Re-Type Password"
              />

              <Buttons
                style={[
                  style_auth.signInButton,
                  isLoading && style_auth.buttonDisabled,
                ]}
                onPress={handleRegister}
                disabled={isLoading}
              >
                <Text style={style_auth.signInButtonText}>
                  {isLoading ? "Registering..." : "Register"}
                </Text>
              </Buttons>

              <View style={style_auth.signUpContainer}>
                <Text style={style_auth.signUpText}>
                  Already have an account?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    router.replace("/module-latihan/latihan8/sign-in")
                  }
                >
                  <Text style={style_auth.signUpLink}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
