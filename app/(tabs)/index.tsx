import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Universo Marvel 🌌</Text>
      <Image
        source={{ uri: "https://i.ibb.co/7z9d1Z0/marvel.jpg" }}
        style={styles.image}
      />
      <Text style={{ color: "#ccc" }}>
        Usa las pestañas abajo para navegar 🦸
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, color: "#fff" },
  image: { width: 250, height: 150, borderRadius: 12, marginBottom: 20 },
});
