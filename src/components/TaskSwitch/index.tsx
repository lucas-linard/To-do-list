import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import theme from "../../theme";
import { Counter } from "../Counter";


export function TaskSwitch() {
    const textColor = theme.PRODUTO;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.mainText,{color: textColor.BLUE}]}>Criadas</Text>
        <Counter value={0}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={[styles.mainText,{color: textColor.PURPLE}]}>Concluidas</Text>
        <Counter value={0}/>
      </TouchableOpacity>
    </View>
  );
}
