import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {observer} from "mobx-react";
import {useRootStore} from "../../Store/RootStore/UseRootStore";
import {ToDoLine} from "../../Component/ToDoLine";
import {axiosClient} from "../../axios/AxiosClient";

export const ToDoScreen = observer(({navigation}) => {
    const [text, setText] = useState('');
    const { toDoStore } = useRootStore();

    const addTodo = () => {
        toDoStore.addToDo(text);
        setText('');
    };

    const removeItem = (item) => {
        toDoStore.removeToDo(item);
    };

    const getCompletedToDos = () => {
        return toDoStore.getCompletedTodos;
    };

    const keyExtractor = (index) => {
        return index.toString();
    };

    axiosClient
        .get('/posts')
        .then(response => {
            console.log('RESPONSE: ', response);
        })
        .catch(error => {
            console.log('ERROR: ', error);
        })
        .then(() => {
            console.log('AFTER RESULT');
        })

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.defaultText}>NEW:</Text>
                <View style={styles.emptyView}></View>
                <FlatList
                    data={toDoStore.todos}
                    keyExtractor={(item, index) => keyExtractor(index)} renderItem={({item}) =>
                    <ToDoLine item={item} onRemove={removeItem}></ToDoLine>}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={newText => setText(newText)}
                    value={text}>
                </TextInput>
                <Button
                    title=" ADD "
                    onPress={() => addTodo()}>
                </Button>
                <View style={styles.emptyView}></View>
                <Button
                    title='Completed'
                    onPress={() => navigation.navigate('CompletedToDo', {completedTodos: getCompletedToDos()})}
                />
                <StatusBar style="auto"/>
            </View>
        </SafeAreaView>
    )
    }
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        padding: 16
    },
    textInput: {
        borderRadius: 8,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
        marginTop: 16
    },
    emptyView: {
        height: 20,
        width: 100
    },
    defaultText: {
        fontWeight: '200',
        color: 'black',
        fontSize: 16
    }
})