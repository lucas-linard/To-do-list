import  { useState } from 'react';
import { TouchableHighlight, TouchableHighlightProps  } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme";
import { styles } from "./styles";

export function DeleteButton(props: TouchableHighlightProps) {
    const [isPressed, setIsPressed] = useState(false);

  const iconColor = isPressed ? theme.PRODUTO.DANGER : theme.BASE.GRAY300;

  return (
    <TouchableHighlight
    underlayColor={theme.BASE.GRAY400}
    onPressIn={() => setIsPressed(true)}
    onPressOut={() => setIsPressed(false)}
    onPress={props.onPress}
    style={styles.container}>
      <Ionicons name="trash-outline" size={17} color={iconColor} />
    </TouchableHighlight>
  );
}
