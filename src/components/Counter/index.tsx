import { View, Text } from 'react-native';
import { styles } from './styles';


export function Counter({ value } : any) {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>{value}</Text>
        </View>
    );
}