import { View,SafeAreaView,  Text } from "react-native";

import {styles} from "./styles";

import { Header } from "../../components/Header";
import { TaskInput } from "../../components/TaskInput";
import { TaskSwitch } from "../../components/TaskSwitch";
export default function Home() {

    return(
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.headerContainer}>

            <Header/>
            </View>
            <View style={styles.taskContainer}>
            <TaskInput/>
                <TaskSwitch/>
            </View>
        </SafeAreaView>
    )
}
