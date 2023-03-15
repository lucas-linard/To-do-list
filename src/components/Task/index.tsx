import { View, Text } from "react-native";

import { CheckButton } from "../CheckButton";
import { DeleteButton } from "../DeleteButton";

import { styles } from "./styles";

export function Task() {
  return (
    <View style={styles.container}>
      <CheckButton isDone={false}/>
      <Text style={styles.text}>This library is installed by defalut by then expo start</Text>
      <DeleteButton/>
    </View>
  );
}