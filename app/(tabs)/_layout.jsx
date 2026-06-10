import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#10b981",
        tabBarInactiveTintColor: "#6b7280",
        tabBarStyle: { paddingBottom: 6, height: 60 },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Menu Kantin",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>🍔</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Keranjang",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>🛒</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "Riwayat",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>📜</Text>
          ),
        }}
      />
    </Tabs>
  );
}
