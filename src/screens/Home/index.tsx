import { useState } from "react";
import { View, FlatList } from "react-native";

import uuid from "react-native-uuid";
import { styles } from "./styles";

import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { EmptyTask } from "../../components/EmptyTask";
import { TaskInput } from "../../components/TaskInput";
import { TaskCounter } from "../../components/TaskCounter";

interface ITask {
  id: string | number[];
  text: string;
  isDone: boolean;
  onDelete?: () => void;
}

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskText, setTaskText] = useState<string>("");
  const [counter, setCounter] = useState({ created: 0, completed: 0 });

  const handleAddTask = (text: string) => {
    const newTask = {
      id: uuid.v4(),
      text,
      isDone: false,
      onDelete: () => {
        if (newTask.isDone) {
          setCounter((prevCounter) => ({
            created: prevCounter.created - 1,
            completed: prevCounter.completed - 1,
          }));
        } else if (!newTask.isDone) {
          setCounter((prevCounter) => ({
            created: prevCounter.created - 1,
            completed: prevCounter.completed,
          }));
        }
        setTasks((prevTasks) =>
          prevTasks.filter((task) => task.id !== newTask.id)
        );
      },
    };

    setTasks([...tasks, newTask]);
    setCounter((prevCounter) => ({
      created: prevCounter.created + 1,
      completed: prevCounter.completed,
    }));
    setTaskText("");
  };

  function handleFinishTask(item: ITask) {
    let index = tasks.indexOf(item);
    if (item.isDone) {
      setCounter((prevCounter) => ({
        created: prevCounter.created,
        completed: prevCounter.completed - 1,
      }));
      tasks[index].isDone = false;
    } else {
      setCounter((prevCounter) => ({
        created: prevCounter.created,
        completed: prevCounter.completed + 1,
      }));
      tasks[index].isDone = true;
    }
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.taskContainer}>
        <TaskInput
          text={taskText}
          onChangeText={(text) => setTaskText(text)}
          onAdd={() => handleAddTask(taskText)}
        />
        <TaskCounter Created={counter.created} Completed={counter.completed} />
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={{ marginHorizontal: 19, marginBottom: 10 }}>
              <Task
                text={item.text}
                isDone={item.isDone}
                onDelete={item.onDelete}
                onComplete={() => handleFinishTask(item)}
              />
            </View>
          )}
          ListEmptyComponent={<EmptyTask />}
        />
      </View>
    </View>
  );
}
