import { StyleSheet } from 'react-native';
import theme from '../../theme';


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -50,
        gap: 4,
        padding: 20,

    },
    textInput: {
        flex: 1,
        backgroundColor: theme.BASE.GRAY500,
        color: theme.BASE.GRAY700,
        gap: 8,
        padding: 16,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: theme.BASE.GRAY700,
        fontSize: 16,
        fontWeight: '400',
    },
    textInputFocused: {
        flex: 1,
        backgroundColor: theme.BASE.GRAY500,
        color: theme.BASE.GRAY100,
        gap: 8,
        padding: 16,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: theme.PRODUTO.PURPLE_DARK,
        fontSize: 16,
        fontWeight: '400',
    },
})