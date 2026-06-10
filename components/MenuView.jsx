import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useCart } from "../context/CartContext";
import { getKantinMenu } from "../services/api";

// Daftar menu makanan kantin buatan untuk menggantikan baju/barang elektronik dari API
const DAFTAR_MAKANAN = [
  {
    nama: "Ayam Geprek Sambal Korek",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80",
  },
  {
    nama: "Nasi Goreng Spesial Kampus",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80",
  },
  {
    nama: "Mie Goreng Telur Ceplok",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&q=80",
  },
  {
    nama: "Soto Ayam Madura",
    image:
      "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=500&q=80",
  },
  {
    nama: "Batagor Bandung Renyah",
    image:
      "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=500&q=80",
  },
  {
    nama: "Es Teh Manis Jumbo",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80",
  },
  {
    nama: "Es Jeruk Peras Segar",
    image:
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&q=80",
  },
  {
    nama: "Kopi Susu Gula Aren",
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&q=80",
  },
  {
    nama: "Gorengan Bakwan & Tahu (Isi 3)",
    image:
      "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&q=80",
  },
  {
    nama: "Pisang Goreng Keju",
    image:
      "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=500&q=80",
  },
];

export default function MenuView() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    getKantinMenu()
      .then((data) => {
        const makananKantin = data.map((item, index) => {
          const infoMakanan = DAFTAR_MAKANAN[index % DAFTAR_MAKANAN.length];
          return {
            id: item.id,
            title: infoMakanan.nama,
            price:
              Math.round(item.price) * 1000 < 5000
                ? 5000
                : Math.round(item.price) * 1000,
            image: infoMakanan.image,
            description: item.description,
          };
        });
        setMenu(makananKantin);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#10b981" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.title} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={styles.price}>
                Rp {item.price.toLocaleString("id-ID")}
              </Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => addToCart(item)}
              >
                <Text style={styles.addButtonText}>+ Tambah</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9fafb", padding: 12 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    alignItems: "center",
  },
  image: { width: 90, height: 90, borderRadius: 8, marginRight: 12 },
  infoContainer: { flex: 1, justifyContent: "space-between", height: 80 },
  title: { fontSize: 15, fontWeight: "bold", color: "#374151" },
  price: {
    fontSize: 14,
    color: "#10b981",
    fontWeight: "600",
    marginVertical: 4,
  },
  addButton: {
    backgroundColor: "#10b981",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  addButtonText: { color: "#fff", fontWeight: "bold", fontSize: 12 },
});
