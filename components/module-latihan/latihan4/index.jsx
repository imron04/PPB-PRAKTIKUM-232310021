import { useMemo, useState } from "react";
import { ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListBook } from "../../../constants/list_books";
import BookCollections from "../latihan4/components/BookCollections";
import SearchBar from "../latihan4/components/SearchBar";
import { styles } from "./styles/StyleApps";
const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Logic filter menggunakan useMemo
  const filteredBooks = useMemo(() => {
    const query = searchQuery.toLowerCase();
    console.log("Filtering books..."); // Untuk cek optimasi di console
    return ListBook.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query),
    );
  }, [searchQuery]); // Hanya dijalankan ulang jika searchQuery berubah
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <ScrollView>
        {/* Oper state dan function ke SearchBar */}
        <SearchBar value={searchQuery} onChangeText={setSearchQuery} />

        {/* Kirim hasil filter ke BookCollections */}
        <BookCollections books={filteredBooks} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
