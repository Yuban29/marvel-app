import { FlatList, StyleSheet, Text, View } from "react-native";

type Task = { priority: string; category: string; recurrent: boolean };

export default function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>Prioridad: {item.priority}</Text>
          <Text>Categoría: {item.category}</Text>
          <Text>Recurrente: {item.recurrent ? "Sí" : "No"}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: { padding: 10, borderBottomWidth: 1, borderColor: "#ccc" },
});
