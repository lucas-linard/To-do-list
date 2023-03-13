import { StyleSheet } from "react-native"
import theme from "../../theme"



export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.BASE.GRAY400,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 999,

    },
    text:{
        color: theme.BASE.GRAY200,
        fontWeight: 'bold',
    }
})