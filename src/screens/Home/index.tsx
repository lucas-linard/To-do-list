import { View,SafeAreaView,  Text } from "react-native";

import {styles} from "./styles";

import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
export default function Home() {

    return(
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.headerContainer}>

            <Header/>
            </View>
            <View style={styles.taskContainer}>

            <NewTask/>
            </View>
        </SafeAreaView>
    )
}
