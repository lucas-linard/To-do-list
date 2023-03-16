import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import theme from "../../theme";
import { Counter } from "../Counter";

type Props = {
  Created: number;
  Completed: number;
}

export function TaskSwitch(props: Props) {
    const textColor = theme.PRODUTO;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.mainText,{color: textColor.BLUE}]}>Criadas</Text>
        <Counter value={props.Created}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={[styles.mainText,{color: textColor.PURPLE}]}>Concluidas</Text>
        <Counter value={props.Completed}/>
      </TouchableOpacity>
    </View>
  );
}
