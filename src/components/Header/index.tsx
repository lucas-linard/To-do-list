import { View } from "react-native";
import { styles } from "./styles";
import Logo from "../Logo";



export function Header() {
    return(
        <View style={styles.container}>
            <Logo/>
        </View>
    )
}