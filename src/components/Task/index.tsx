import { useState } from "react";
import { View, Text } from "react-native";

import { CheckButton } from "../CheckButton";
import { DeleteButton } from "../DeleteButton";

import { styles } from "./styles";

type Props ={ 
  text: string;
  isDone: boolean;
  onDelete?: () => void;
  onComplete: () => void;
}

export function Task(props: Props) {
  const [isDone, setIsDone] = useState(props.isDone);


  function handleComplete () {
    setIsDone(!isDone);
    props.onComplete()
  }
  
  return (
    <View style={styles.container}>
      <CheckButton onPress={handleComplete} isDone={isDone}/>
      <Text style={isDone ? styles.textDone : styles.text}>{props.text}</Text>
      <DeleteButton onPress={props.onDelete}/>
    </View>
  );
}