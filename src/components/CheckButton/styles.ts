import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
    containerDone: {
        width: 17,
        height: 17,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.PRODUTO.PURPLE_DARK,
        borderRadius: 50,
    },
    container: {
        width: 17,
        height: 17,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: theme.PRODUTO.BLUE,
        borderRadius: 50,
    },
})