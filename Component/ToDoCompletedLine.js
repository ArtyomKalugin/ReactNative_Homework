import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

export const ToDoCompletedLine = (props) => {
    return (
        <View style={[styles.todoLine, {backgroundColor: '#90EE90'}]}>
            <TouchableOpacity style={styles.todoLineTouch}>
                <Text style={styles.titleText}>{props.item.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

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
        fontSize: 18
    },
})