import { StyleSheet } from "react-native";
import theme from "../../theme";



export const styles = StyleSheet.create({
    emptyTaskContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 48,
        borderTopWidth: 1,
        borderColor: theme.BASE.GRAY400
    },
    emptyTaskTextTitle:{
        color: theme.BASE.GRAY300,
        fontSize: 14,
        fontWeight: '700',
    },
    emptytextTask:{
        color: theme.BASE.GRAY300,
        fontSize: 14,
        fontWeight: '400',
    }

})