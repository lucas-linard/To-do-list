import { View, Text } from "react-native";

import Clipboard from "../Clipboard";
import { styles } from "./styles";

export function EmptyTask() {
    return (
        <View style={styles.emptyTaskContainer}>
        <Clipboard/>
        <Text style={styles.emptyTaskTextTitle}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.emptytextTask}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    );
}