import { TouchableHighlight } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";




export function SquareButton() {
    return(
        <TouchableHighlight style={styles.container}>
            <Ionicons name="add-circle-outline" size={24} color="white" />
        </TouchableHighlight>
    )
}