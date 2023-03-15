import { TouchableHighlight, TouchableHighlightProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme";
import { styles } from "./styles";

export function SquareButton(props: TouchableHighlightProps) {
  return (
    <TouchableHighlight underlayColor={theme.PRODUTO.BLUE} onPress={props.onPress} style={styles.container}>
      <Ionicons name="add-circle-outline" size={24} color="white" />
    </TouchableHighlight>
  );
}
