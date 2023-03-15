import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "./styles";


import theme from "../../theme";

interface Props extends TouchableOpacityProps {
    isDone: boolean;
}

export function CheckButton({ isDone, ...props }: Props) {
    return (
        <TouchableOpacity 
        onPress={props.onPress}
        style={isDone ? styles.containerDone : styles.container}
        >
        {isDone && <Ionicons name="checkmark-sharp" size={12} color={theme.BASE.GRAY100} />}  
        </TouchableOpacity>
    );
}