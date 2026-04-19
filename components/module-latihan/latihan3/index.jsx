import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Index = () => {
  const Biodata = {
    nama: "Anton Sukamto",
    nim: "2323100",
    alamat: "Bogor",
    email: "anton@mail.co",
    noTelp: "08122111",
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.headers.img}
        source={require("../../../assets/avatar/avatar.png")}
      />

      <Text style={styles.headers.title}>Nama: {Biodata.nama}</Text>
      <Text style={styles.headers.subtitle}>NIM: {Biodata.nim}</Text>

      <View style={styles.identity.container}>
        <View style={styles.identity.card_input}>
          <Text style={styles.headers.subtitle}>Phone</Text>
          <TextInput
            value={Biodata.noTelp}
            style={styles.identity.input_text}
            autoFocus
          />
        </View>
      </View>

      <View style={styles.identity.container}>
        <View style={styles.identity.card_input}>
          <Text style={styles.headers.subtitle}>Email</Text>
          <TextInput
            value={Biodata.email}
            style={styles.identity.input_text}
            autoFocus
          />
        </View>
      </View>

      <View style={styles.identity.container}>
        <View style={styles.identity.card_input}>
          <Text style={styles.headers.subtitle}>Alamat</Text>
          <TextInput
            value={Biodata.alamat}
            style={styles.identity.input_text}
            autoFocus
          />
        </View>
      </View>

      <View style={{ marginTop: 15 }}>
        <TouchableOpacity style={styles.identity.button}>
          <Text style={styles.identity.button}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headers: {
    title: {
      fontWeight: "bold",
      fontSize: 40,
    },
    subtitle: {
      fontWeight: "bold",
      fontSize: 20,
      color: "red",
    },
    img: {
      width: 150,
      height: 150,
      borderRadius: 100,
      borderColor: "black",
      borderWidth: 4,
      padding: 2,
      backgroundColor: "#f2f2f2",
    },
  },
  identity: {
    container: {
      alignSelf: "stretch",
      padding: 10,
      marginTop: 20,
    },
    card_input: {
      borderWidth: 1,
      borderColor: "#9b9d9f",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginBottom: 10,
    },
    title: {
      color: "#9b9d9f",
      fontSize: 16,
      marginBottom: 0,
    },
    input_text: {
      color: "#000",
      fontSize: 16,
      padding: 0,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#0ea6d0",
      padding: 15,
      borderRadius: 10,
    },
    button_text: {
      fontSize: 18,
      color: "white",
      fontWeight: "bold",
    },
  },
});

export default Index;
