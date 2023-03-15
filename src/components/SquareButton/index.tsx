import { TouchableHighlight, TouchableHighlightProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

export function SquareButton(props: TouchableHighlightProps) {
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.container}>
      <Ionicons name="add-circle-outline" size={24} color="white" />
    </TouchableHighlight>
  );
}
