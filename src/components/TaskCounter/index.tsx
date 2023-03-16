import { View, Text } from "react-native";
import { styles } from "./styles";
import theme from "../../theme";
import { Counter } from "../Counter";

type Props = {
  Created: number;
  Completed: number;
}

export function TaskCounter(props: Props) {
    const textColor = theme.PRODUTO;

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Text style={[styles.mainText,{color: textColor.BLUE}]}>Criadas</Text>
        <Counter value={props.Created}/>
      </View>

      <View style={styles.button}>
        <Text style={[styles.mainText,{color: textColor.PURPLE}]}>Concluidas</Text>
        <Counter value={props.Completed}/>
      </View>
    </View>
  );
}
