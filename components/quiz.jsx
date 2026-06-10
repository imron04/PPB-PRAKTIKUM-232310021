import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const Quiz = () => {
  const bio = [
    {
      nama: "Imron",
      npm: "232310021",
      usia: 22,
      img: require("../assets/avatar/gibran.jpg"),
    },
    {
      nama: "Haikal",
      npm: "242310031",
      usia: 19,
      img: require("../assets/avatar/joko.webp"),
    },
    {
      nama: "Azizah",
      npm: "242310025",
      usia: 20,
      img: require("../assets/avatar/swift.jpg"),
    },
    {
      nama: "Abrar",
      npm: "242310035",
      usia: 22,
      img: require("../assets/avatar/jolie.jpg"),
    },
  ];

  return (
    <ScrollView contentContainerStyle={{ padding: 20, marginBottom: 100 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {bio.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "lightblue",
              marginTop: 10,
              width: 200,
              height: 250,
              padding: 20,
              justifyContent: "center",
            }}
          >
            <Image
              source={item.img}
              style={{ borderRadius: 100, width: 150, height: 150 }}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Nama: {item.nama}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Npm: {item.npm}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              usia: {item.usia}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Quiz;
