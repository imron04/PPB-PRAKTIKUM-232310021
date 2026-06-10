import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useCart } from "../context/CartContext";

export default function CartView() {
  const { cart, addToCart, removeFromCart, checkout, getTotalPrice } =
    useCart();

  const handleCheckout = () => {
    if (cart.length === 0) {
      Alert.alert(
        "Keranjang Kosong",
        "Silahkan pilih makanan terlebih dahulu.",
      );
      return;
    }
    checkout();
    Alert.alert("Sukses", "Pesananmu berhasil diproses ke kantin!");
  };

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.emptyText}>
            Belum ada makanan di keranjang 🛒
          </Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemCard}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <View style={styles.itemInfo}>
                  <Text style={styles.itemTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text style={styles.itemPrice}>
                    Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                  </Text>
                  <View style={styles.qtyContainer}>
                    <TouchableOpacity
                      style={styles.qtyBtn}
                      onPress={() => removeFromCart(item.id)}
                    >
                      <Text style={styles.qtyBtnText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.qtyText}>{item.quantity}</Text>
                    <TouchableOpacity
                      style={styles.qtyBtn}
                      onPress={() => addToCart(item)}
                    >
                      <Text style={styles.qtyBtnText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
          <View style={styles.footer}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total Pembayaran:</Text>
              <Text style={styles.totalValue}>
                Rp {getTotalPrice().toLocaleString("id-ID")}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.checkoutBtn}
              onPress={handleCheckout}
            >
              <Text style={styles.checkoutBtnText}>Pesan Sekarang</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9fafb", padding: 12 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyText: { color: "#6b7280", fontSize: 16 },
  itemCard: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
    alignItems: "center",
    elevation: 1,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 6,
    marginRight: 12,
    resizeMode: "contain",
  },
  itemInfo: { flex: 1, justifyContent: "center" },
  itemTitle: { fontSize: 14, fontWeight: "bold", color: "#374151" },
  itemPrice: {
    fontSize: 13,
    color: "#10b981",
    fontWeight: "600",
    marginVertical: 2,
  },
  qtyContainer: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  qtyBtn: {
    backgroundColor: "#e5e7eb",
    width: 26,
    height: 26,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  qtyBtnText: { fontSize: 16, fontWeight: "bold", color: "#374151" },
  qtyText: { marginHorizontal: 12, fontWeight: "bold" },
  footer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    elevation: 4,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  totalLabel: { fontSize: 16, color: "#4b5563" },
  totalValue: { fontSize: 18, fontWeight: "bold", color: "#10b981" },
  checkoutBtn: {
    backgroundColor: "#10b981",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutBtnText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
