import { useState } from "react";
import { View, TextInput, Keyboard } from "react-native";
import { SquareButton } from "../SquareButton";

import { styles } from "./styles";
import theme from "../../theme";

interface IProps {
    onAdd: () => void;
    onChangeText?: (text: string) => void;
    text: string;
}
export function TaskInput(props: IProps) {
    const [ isFocused, setIsFocused ] = useState(false);
    const handleInputFocus = () => {
        setIsFocused(true);
    }

    const handleInputBlur = () => {
        setIsFocused(false);
    }

    const handleOnAdd = ({onAdd}: IProps) => {
         Keyboard.dismiss() 
         onAdd();
    }
    return(
        <View style={styles.container}>
            <TextInput 
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            value={props.text}
            onChangeText={props.onChangeText}
            style={isFocused ? styles.textInputFocused : styles.textInput}
            placeholder="Adicionar uma nova tarefa"
            placeholderTextColor={isFocused? theme.BASE.GRAY100 : theme.BASE.GRAY300 }
            />
            <SquareButton onPress={() => handleOnAdd(props)}/>
        </View>
    )
}