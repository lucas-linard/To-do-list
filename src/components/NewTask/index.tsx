import { View, TextInput, Text } from "react-native";
import { SquareButton } from "../SquareButton";

import { styles } from "./styles";
import theme from "../../theme";

export function NewTask() {
    return(
        <View style={styles.container}>
            <TextInput 
            style={styles.textInput}
            placeholder="Adicionar uma nova tarefa"
            placeholderTextColor={theme.BASE.GRAY100}
            />
            <SquareButton/>
        </View>
    )
}