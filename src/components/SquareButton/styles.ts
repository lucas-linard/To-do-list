import { StyleSheet } from "react-native";

import theme from "../../theme";


export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.PRODUTO.BLUE_DARK,
        borderRadius: 5,
        padding: 18,
        gap: 8,
        aspectRatio: 1,
    }
})