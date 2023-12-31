import {Button, View, Text} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as React from 'react';
import {ToDoScreen} from "../Screen/ToDoScreen/ToDoScreen";
import {CompletedToDoScreen} from "../Screen/ToDoScreen/CompletedToDoScreen";
import {PostsScreen} from "../Screen/PostsScreen/PostsScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={HomeScreen}/>
            <Stack.Screen name={'About'} component={AboutScreen}/>
            <Stack.Screen name={'ToDoScreen'} component={ToDoScreen}/>
            <Stack.Screen name={'PostsScreen'} component={PostsScreen} />
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
                onPress={() => navigation.navigate('ToDoScreen')}
                title='ToDo List'
            />
            <Button
                onPress={() => navigation.navigate('PostsScreen')}
                title='Posts'
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