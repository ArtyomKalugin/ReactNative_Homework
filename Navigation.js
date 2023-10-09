import {Button, View, Text} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as React from 'react';
import ToDoList from "./ToDoList";
import {CompletedScreen} from "./ToDoList";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={HomeScreen}/>
            <Stack.Screen name={'About'} component={AboutScreen}/>
            <Stack.Screen name={'ToDoList'} component={ToDoList}/>
            <Stack.Screen name={'CompletedToDo'} component={CompletedScreen}/>
        </Stack.Navigator>
    );
}

function HomeScreen({navigation}) {
    return (
        <View>
            <Button
                onPress={() => navigation.navigate('About')}
                title='About'
            />
            <Button
                onPress={() => navigation.navigate('ToDoList')}
                title='ToDo List'
            />
        </View>
    );
}

function AboutScreen({navigation}) {
    return (
        <View>
            <Button
                title='Back'
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}