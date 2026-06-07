import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { color_list } from "./styles/StyleApps";

const Profile = () => {
  const router = useRouter();
  const [name, setName] = useState("USER");
  const [email, setEmail] = useState("user@example.com");
  const [bio, setBio] = useState(
    "Information Technology Student | Web & Mobile Developer",
  );
  const [avatar, setAvatar] = useState("https://via.placeholder.com/150");

  const pickerOptions = {
    mediaTypes: ["images"],
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0.7,
  };

  const handleTakeAction = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "Izin Ditolak",
        "Aplikasi memerlukan akses kamera untuk mengambil foto profil.",
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync(pickerOptions);

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setAvatar(result.assets[0].uri);
    }
  };

  const handlePickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "Izin Ditolak",
        "Aplikasi memerlukan akses galeri untuk memilih foto profil.",
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync(pickerOptions);

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setAvatar(result.assets[0].uri);
    }
  };

  const requestAvatarChange = () => {
    Alert.alert(
      "Ubah Avatar",
      "Pilih metode untuk mengubah foto profil Anda:",
      [
        { text: "Kamera", onPress: handleTakeAction },
        { text: "Galeri", onPress: handlePickImage },
        { text: "Batal", style: "cancel" },
      ],
      { cancelable: true },
    );
  };

  const handleSaveChanges = () => {
    const updatedData = { name, email, bio, avatar };
    console.log("Simpan ke Database/API:", updatedData);
    Alert.alert("Sukses", "Profil berhasil diperbaharui!");
  };

  const logout = async () => {
    try {
      await AsyncStorage.multiRemove(["authToken", "userData", "isLoggedIn"]);
      router.replace("/module-latihan/latihan8/sign-in");
    } catch (error) {
      console.error("Error signing out:", error);
      Alert.alert("Error", "Gagal sign out");
    }
  };

  const handleSignOut = () => {
    Alert.alert(
      "Sign Out",
      "Are you sure you want to sign out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Sign Out",
          style: "destructive",
          onPress: logout,
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Avatar Section */}
          <View style={styles.avatarContainer}>
            <View style={styles.avatarWrapper}>
              <Image source={{ uri: avatar }} style={styles.avatar} />
              <TouchableOpacity
                style={styles.changeAvatarBtn}
                onPress={requestAvatarChange}
                activeOpacity={0.8}
              >
                <MaterialIcons name="camera-alt" size={18} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Form Section */}
          <View style={styles.formContainer}>
            <Text style={styles.label}>Nama Lengkap</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Nama Anda"
              placeholderTextColor="#999"
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email Anda"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.label}>Bio</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={bio}
              onChangeText={setBio}
              placeholder="Bio singkat"
              placeholderTextColor="#999"
              multiline
              numberOfLines={3}
            />
          </View>

          {/* Save Button */}
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSaveChanges}
            activeOpacity={0.7}
          >
            <MaterialIcons name="save" size={20} color="#FFF" />
            <Text style={styles.saveButtonText}>Simpan Perubahan</Text>
          </TouchableOpacity>

          {/* Sign Out Button */}
          <View style={styles.signOutContainer}>
            <TouchableOpacity
              style={styles.signOutButton}
              onPress={handleSignOut}
              activeOpacity={0.7}
            >
              <MaterialIcons name="logout" size={20} color="#FFF" />
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.versionText}>Version 1.0.0</Text>
          <Text style={styles.versionText}>
            &copy; 2026 Febry Damatraseta Fairuz
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color_list.cream,
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatarWrapper: {
    position: "relative",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: color_list.green,
    backgroundColor: color_list.white,
  },
  changeAvatarBtn: {
    position: "absolute",
    bottom: 0,
    right: 5,
    backgroundColor: color_list.orange,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  formContainer: {
    width: "100%",
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: color_list.green_dark,
    marginBottom: 6,
    marginLeft: 4,
  },
  input: {
    width: "100%",
    backgroundColor: color_list.white,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === "ios" ? 14 : 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: color_list.green_light,
    fontSize: 16,
    color: color_list.black,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  textArea: {
    height: 90,
    textAlignVertical: "top",
  },
  saveButton: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: color_list.green,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 10,
    shadowColor: color_list.green,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  saveButtonText: {
    color: color_list.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  signOutContainer: {
    marginVertical: 25,
    alignItems: "center",
  },
  signOutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DC3545",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    gap: 10,
    shadowColor: "#DC3545",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    minWidth: 200,
  },
  signOutText: {
    color: color_list.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  versionText: {
    marginTop: 4,
    fontSize: 12,
    color: "#999",
    textAlign: "center",
  },
});
