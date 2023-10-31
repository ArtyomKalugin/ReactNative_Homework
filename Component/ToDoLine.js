import React, {useState} from "react";
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";

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
    titleText: {
        fontWeight: '400',
        fontSize: 18,
        flex: 3
    }
})