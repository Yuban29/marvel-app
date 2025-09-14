import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

const heroes = [
  { name: "Iron Man", img: "https://i.ibb.co/3r3dLJX/ironman.jpg" },
  { name: "Spider-Man", img: "https://i.ibb.co/xM7qQJh/spiderman.jpg" },
  { name: "Captain America", img: "https://i.ibb.co/3fc0L7C/cap.jpg" },
];

export default function HeroScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Héroes Marvel 🦸</Text>
      {heroes.map((hero, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <Image source={{ uri: hero.img }} style={styles.img} />
          <Text style={styles.name}>{hero.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#111" },
  title: { fontSize: 24, color: "#fff", textAlign: "center", marginVertical: 15 },
  card: { backgroundColor: "#222", margin: 10, borderRadius: 12, padding: 10, alignItems: "center" },
  img: { width: 250, height: 150, borderRadius: 10 },
  name: { color: "#fff", marginTop: 10, fontSize: 18 },
});
