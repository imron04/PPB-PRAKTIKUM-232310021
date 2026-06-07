import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/StyleApps";
import { ButtonPill } from "./buttons";

const CTABook = ({ book }) => {
  const router = useRouter();

  const handleReadNow = async () => {
    const authToken = await AsyncStorage.getItem("authToken");
    const userDataString = await AsyncStorage.getItem("userData");
    const isLoggedInFlag = await AsyncStorage.getItem("isLoggedIn");

    if (!authToken && !userDataString && isLoggedInFlag !== "true") {
      Alert.alert("Login Required", "Please sign in to view book details", [
        {
          text: "Sign In",
          onPress: () => router.replace("/module-latihan/latihan8/sign-in"),
        },
      ]);
      router.replace("/module-latihan/latihan8/sign-in");
      return;
    }

    router.push(`/module-latihan/latihan8/book/${book.id}`);
  };

  return (
    <View style={[styles.new_com_container, styles.shadow]}>
      <View style={{ flexDirection: "row" }}>
        <CTAImage book={book} />
        <View
          style={{
            marginLeft: 15,
            flex: 1,
            flexShrink: 1,
            justifyContent: "space-between",
          }}
        >
          <CTAInfoBook book={book} />

          <ButtonPill onAction={handleReadNow}>
            <Text style={styles.buttonText}>Read Now</Text>
          </ButtonPill>
        </View>
      </View>
    </View>
  );
};

const CTAImage = ({ book }) => {
  return (
    <View style={{ position: "relative" }}>
      <Image
        source={book.img}
        style={[styles.new_book_img, styles.shadow]}
        resizeMode="cover"
      />
      {!book.is_free && (
        <View style={[styles.circle_premium, styles.shadow]}>
          <AntDesign name="crown" size={18} color="black" />
        </View>
      )}
    </View>
  );
};

const CTAInfoBook = ({ book }) => {
  return (
    <View>
      <Text style={styles.new_book_title}>{book.title}</Text>
      <Text style={styles.new_book_text}>by {book.author}</Text>
      <View style={{ marginTop: 10 }}>
        <Text
          style={styles.new_book_text}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {book.sinopsis}
        </Text>
      </View>
    </View>
  );
};

const ButtonRead = () => {
  return (
    <TouchableOpacity style={[styles.btn_read, styles.shadow]}>
      <Text style={styles.btn_read_text}>Read Now</Text>
    </TouchableOpacity>
  );
};

export default CTABook;
