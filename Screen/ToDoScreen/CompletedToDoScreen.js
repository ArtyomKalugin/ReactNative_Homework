import {FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import React, {useRef} from "react";
import {ToDoCompletedLine} from "../../Component/ToDoCompletedLine";
import {Portal} from "react-native-portalize";
import {Modalize} from "react-native-modalize";

export const CompletedToDoScreen = (props) => {
    const keyExtractor = (index) => {
        return index.toString();
    };

    return(
        <View style={styles.content}>
            <Text style={styles.defaultText}>COMPLETED:</Text>
            <View style={styles.emptyView}></View>
            <StatusBar style="auto"/>
        </View>
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