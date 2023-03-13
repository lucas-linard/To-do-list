import { StyleSheet } from "react-native";




export const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginHorizontal: 10,
    },
    button:{
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8,
    },
    mainText:{
        fontWeight: 'bold',
        fontSize: 14,
    }
})