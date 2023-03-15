import { StyleSheet } from "react-native";
import theme from "../../theme";


export const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 32,
        height: 32,
        borderRadius: 4,
    },
    containerPressed:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 32,
        height: 32,
        borderRadius: 4,
        backgroundColor: theme.BASE.GRAY400,

    }
})
