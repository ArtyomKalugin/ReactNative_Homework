import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

class ToDoItem {
    constructor(text) {
        this.text = text;
        this.isDone = false;
    }

    done() {
        this.isDone = true;
    }
}

export default function ToDoList({navigation}) {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');
    const addTodo = () => {
        let newTodos = [...todos];
        let newItem = new ToDoItem(text);
        newTodos.push(newItem);
        setTodos(newTodos);
        setText('');
    };

    const removeItem = (item) => {
        let newTodos = [...todos];
        let index = newTodos.indexOf(item);
        delete newTodos[index];
        setTodos(newTodos)
    };

    const getCompletedToDos = () => {
        const items = [...todos]
        return items.filter(item => item.isDone)
    }

    const keyExtractor = (index) => {
        return index.toString();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.defaultText}>NEW:</Text>
                <View style={styles.emptyView}></View>
                <FlatList
                    data={todos}
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

export const CompletedScreen = ({route}) => {
    const keyExtractor = (index) => {
        return index.toString();
    };

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.defaultText}>COMPLETED:</Text>
                <View style={styles.emptyView}></View>
                <FlatList
                    data={route.params.completedTodos}
                    keyExtractor={(item, index) => keyExtractor(index)} renderItem={({item}) =>
                    <ToDoCompletedLine item={item}></ToDoCompletedLine>}
                />
                <StatusBar style="auto"/>
            </View>
        </SafeAreaView>
    )
};

export const ToDoCompletedLine = (props) => {
    return (
        <View style={[styles.todoLine, {backgroundColor: '#90EE90'}]}>
            <TouchableOpacity style={styles.todoLineTouch}>
                <Text style={styles.titleText}>{props.item.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export const ToDoLine = (props) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isCompleted, setIsCompleted] = useState(false);

    const onRemove = () => {
        setIsVisible(false);
        props.onRemove(props.item)
    }

    const onCompleted = () => {
        props.item.done()
        setIsCompleted(true);
    }

    if (isVisible) {
        return (
            <View style={[styles.todoLine, {backgroundColor: isCompleted ? '#90EE90' : 'white'}]}>
                <TouchableOpacity style={styles.todoLineTouch}>
                    <Text style={styles.titleText}>{props.item.text}</Text>
                    <Button
                        title='Done'
                        onPress={() => onCompleted()}
                    />
                    <Button
                        title='Remove'
                        onPress={() => onRemove()}/>
                </TouchableOpacity>
            </View>
        )
    } else {
        return (<View />);
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        padding: 16
    },
    todoLine: {
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap'
    },
    todoLineTouch: {
        padding: 8,
        flexDirection: 'row',
        flex: 3,
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
    },
    titleText: {
        fontWeight: '400',
        fontSize: 18,
        flex: 3
    },
})