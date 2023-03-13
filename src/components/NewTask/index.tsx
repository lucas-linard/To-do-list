import { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { SquareButton } from "../SquareButton";

import { styles } from "./styles";
import theme from "../../theme";

export function NewTask() {
    const [ isFocused, setIsFocused ] = useState(false);

    const handleInputFocus = () => {
        setIsFocused(true);
    }

    const handleInputBlur = () => {
        setIsFocused(false);
    }

    return(
        <View style={styles.container}>
            <TextInput 
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            style={isFocused ? styles.textInputFocused : styles.textInput}
            placeholder="Adicionar uma nova tarefa"
            placeholderTextColor={isFocused? theme.BASE.GRAY100 : theme.BASE.GRAY300 }
            />
            <SquareButton/>
        </View>
    )
}