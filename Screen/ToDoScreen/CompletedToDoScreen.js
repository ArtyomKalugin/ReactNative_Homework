import {FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {ToDoCompletedLine} from "../../Component/ToDoCompletedLine";

export const CompletedToDoScreen = ({route}) => {
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

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        padding: 16
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