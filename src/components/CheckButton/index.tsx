import { TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "./styles";


import theme from "../../theme";

type Props = {
    isDone: boolean;
}
export function CheckButton(props: Props) {
    return (
        <TouchableOpacity style={props.isDone ? styles.containerDone : styles.container}>
        {props.isDone && <Ionicons name="checkmark-sharp" size={12} color={theme.BASE.GRAY100} />}  
        </TouchableOpacity>
    );
}