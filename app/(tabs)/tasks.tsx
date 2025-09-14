import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

type Task = {
  title: string;
  priority: string;
  category: string;
  isRecurring: boolean;
};

type TaskFormProps = {
  onAdd: (task: Task) => void;
};

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Media");
  const [category, setCategory] = useState("Trabajo");
  const [isRecurring, setIsRecurring] = useState(false);

  const handleSubmit = () => {
    if (title.trim() === "") return;
    onAdd({ title, priority, category, isRecurring });
    setTitle(""); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nueva Tarea:</Text>
      <TextInput
        placeholder="Escribe la tarea"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      {}
      <Button title="Agregar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  label: { fontWeight: "bold", marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
});
