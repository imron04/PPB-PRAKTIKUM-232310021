import { FlatList, StyleSheet, Text, View } from "react-native";
import { useCart } from "../context/CartContext";

export default function HistoryView() {
  const { history } = useCart();

  return (
    <View style={styles.container}>
      {history.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.emptyText}>Belum ada riwayat transaksi 📝</Text>
        </View>
      ) : (
        <FlatList
          data={history}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.historyCard}>
              <View style={styles.headerRow}>
                <Text style={styles.txId}>{item.id}</Text>
                <Text style={styles.txDate}>{item.date}</Text>
              </View>
              <View style={styles.divider} />
              {item.items.map((subItem) => (
                <Text key={subItem.id} style={styles.itemText}>
                  • {subItem.title} ({subItem.quantity}x)
                </Text>
              ))}
              <View style={styles.divider} />
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Total:</Text>
                <Text style={styles.totalValue}>
                  Rp {item.total.toLocaleString("id-ID")}
                </Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9fafb", padding: 12 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyText: { color: "#6b7280", fontSize: 16 },
  historyCard: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  headerRow: { flexDirection: "row", justifyContent: "space-between" },
  txId: { fontWeight: "bold", color: "#111827", fontSize: 14 },
  txDate: { color: "#9ca3af", fontSize: 12 },
  divider: { height: 1, backgroundColor: "#f3f4f6", marginVertical: 8 },
  itemText: { fontSize: 13, color: "#4b5563", marginBottom: 4 },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: { fontWeight: "600", color: "#374151" },
  totalValue: { fontWeight: "bold", color: "#10b981", fontSize: 15 },
});
