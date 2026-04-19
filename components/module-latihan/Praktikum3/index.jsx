import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Index = () => {
  const Biodata = {
    nama: "Anton Sukamto", // String
    nim: 2323100, // Number
    alamat: "Bogor", // String
    email: "anton@mail.co", // String
    noTelp: "08122111", // String
    hobi: ["Coding", "Gaming", "Music"], // Array
    socialMedia: { ig: "@anton_s", github: "anton-dev" }, // Object
    isActiveStudent: true, // Boolean
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1557683316-973673baf926",
          }}
          style={styles.headerBG}
          imageStyle={styles.headerBGImage}
        >
          <View style={styles.profileWrapper}>
            <Image
              style={styles.headers.img}
              source={require("../../../assets/avatar/avatar.png")}
            />
            <Text style={styles.textWhite}>{Biodata.nama}</Text>
            <Text style={styles.textWhiteSub}>NIM: {Biodata.nim}</Text>

            <View
              style={[
                styles.badge,
                {
                  backgroundColor: Biodata.isActiveStudent
                    ? "#d4edda"
                    : "#f8d7da",
                },
              ]}
            >
              <Text
                style={{
                  color: Biodata.isActiveStudent ? "#155724" : "#721c24",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                {Biodata.isActiveStudent ? "ACTIVE STUDENT" : "INACTIVE"}
              </Text>
            </View>
          </View>
        </ImageBackground>

        {/* --- Menampilkan 6 data personal --- */}
        <View style={styles.formContainer}>
          {[
            { label: "Phone Number", value: Biodata.noTelp },
            { label: "Email Address", value: Biodata.email },
            { label: "Home Address", value: Biodata.alamat },
            { label: "Instagram", value: Biodata.socialMedia.ig }, // Data dari Object
            { label: "Primary Hobby", value: Biodata.hobi[0] }, // Data dari Array
            {
              label: "Student Status",
              value: Biodata.isActiveStudent ? "Verified" : "Unverified",
            }, // Data Boolean
          ].map((item, index) => (
            <View key={index} style={styles.identity.container}>
              <View style={styles.identity.card_input}>
                <Text style={styles.identity.title}>{item.label}</Text>
                <TextInput
                  value={String(item.value)}
                  style={styles.identity.input_text}
                  editable={false}
                />
              </View>
            </View>
          ))}

          <View style={{ marginTop: 20, paddingHorizontal: 15 }}>
            <TouchableOpacity style={styles.identity.button}>
              <Text style={styles.identity.button_text}>Save Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headerBG: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  headerBGImage: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    opacity: 0.8,
  },
  profileWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  textWhite: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  textWhiteSub: {
    color: "#e0e0e0",
    fontSize: 14,
    marginBottom: 5,
  },
  badge: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    marginTop: 10,
  },
  formContainer: {
    paddingBottom: 30,
    marginTop: -20,
  },
  headers: {
    img: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderColor: "white",
      borderWidth: 3,
    },
  },
  identity: {
    container: { alignSelf: "stretch", paddingHorizontal: 20, marginTop: 15 },
    card_input: {
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "#e0e0e0",
      borderRadius: 12,
      paddingHorizontal: 15,
      paddingVertical: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    title: { color: "#888", fontSize: 12, fontWeight: "600" },
    input_text: {
      color: "#333",
      fontSize: 16,
      marginTop: 4,
      fontWeight: "500",
    },
    button: {
      alignItems: "center",
      backgroundColor: "#0ea6d0",
      padding: 16,
      borderRadius: 12,
      elevation: 5,
    },
    button_text: { color: "white", fontWeight: "bold", fontSize: 16 },
  },
});

export default Index;
