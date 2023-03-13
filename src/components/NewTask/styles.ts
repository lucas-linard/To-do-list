import { StyleSheet } from 'react-native';
import theme from '../../theme';


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -50,
        marginHorizontal: 10,
        padding: 20,

    },
    textInput: {
        flex: 1,
        backgroundColor: theme.BASE.GRAY500,
        color: theme.BASE.GRAY100,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },
})