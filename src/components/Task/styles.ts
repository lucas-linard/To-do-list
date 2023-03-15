import { StyleSheet } from "react-native";
import theme from "../../theme";


export const styles = StyleSheet.create({
    container:{
        width: '90%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingLeft: 12,
        paddingRight: 8,
        gap: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.BASE.GRAY400,
        backgroundColor: theme.BASE.GRAY500,
    },
    text:{
        width: '80%',
        color: theme.BASE.GRAY100,
        fontSize: 14,
        lineHeight: 20,
    },
    textDone:{
        color: theme.BASE.GRAY300,
        textDecorationLine: 'line-through',
        fontSize: 14,
        lineHeight: 20,
    }

})