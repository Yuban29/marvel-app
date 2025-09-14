import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Checkbox, RadioButton } from "react-native-paper";

type TaskFormProps = {
  onAdd: (task: { priority: string; category: string; recurrent: boolean }) => void;
};

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [priority, setPriority] = useState("alta");
  const [category, setCategory] = useState("Trabajo");
  const [recurrent, setRecurrent] = useState(false);

  const handleAdd = () => {
    onAdd({ priority, category, recurrent });
  };

  return (
    <View>
      <Text style={styles.label}>Prioridad</Text>
      <RadioButton.Group onValueChange={setPriority} value={priority}>
        <RadioButton.Item label="Alta" value="alta" />
        <RadioButton.Item label="Media" value="media" />
        <RadioButton.Item label="Baja" value="baja" />
      </RadioButton.Group>

      <Text style={styles.label}>Categoría</Text>
      <Picker selectedValue={category} onValueChange={(item) => setCategory(item)}>
        <Picker.Item label="Trabajo" value="Trabajo" />
        <Picker.Item label="Personal" value="Personal" />
        <Picker.Item label="Compras" value="Compras" />
      </Picker>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Checkbox
          status={recurrent ? "checked" : "unchecked"}
          onPress={() => setRecurrent(!recurrent)}
        />
        <Text>¿Es recurrente?</Text>
      </View>

      <Button title="Agregar tarea" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontWeight: "bold", marginTop: 10 },
});
