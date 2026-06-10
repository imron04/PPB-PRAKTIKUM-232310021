import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { loginUser } from "../services/api";

export default function LoginView() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Harap isi semua kolom!");
      return;
    }
    setLoading(true);
    try {
      await loginUser(username, password);
      Alert.alert("Sukses", "Login Berhasil!");
      router.replace("/(tabs)");
    } catch (error) {
      Alert.alert("Gagal Login", "Username atau password salah.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>KantinKu 🍔</Text>
        <Text style={styles.subtitle}>
          Silahkan login untuk memesan makanan
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Masuk</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.hint}>User Uji Coba: johnd / m38rmF$</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1f2937",
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#10b981",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  hint: {
    fontSize: 12,
    color: "#9ca3af",
    textAlign: "center",
    marginTop: 16,
    fontStyle: "italic",
  },
});
