import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInput, View } from "react-native";
import { styles } from "../styles/StyleApps";

// Terima props value dan onChangeText
const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.searchSection}>
      <Ionicons
        style={styles.searchIcon}
        name="search-outline"
        size={20}
        color="gray"
      />

      <TextInput
        style={styles.input}
        placeholder="Cari buku..."
        underlineColorAndroid="transparent"
        value={value} // Sinkronisasi dengan state di parent
        onChangeText={onChangeText} // Update state saat mengetik
      />
    </View>
  );
};

export default SearchBar;
