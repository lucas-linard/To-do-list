import { StyleSheet } from "react-native";
import theme from "../../theme";


export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: theme.BASE.GRAY700,
        alignItems: 'center',
        
    },
    headerContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    taskContainer: {
        flex: 4,
        width: '100%',
        alignItems: "center",
        backgroundColor: theme.BASE.GRAY600,
        marginHorizontal: 10,
        //padding: 10,
        
    },
})