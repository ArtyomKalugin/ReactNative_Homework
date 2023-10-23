import {Button, View, Text, StyleSheet, SafeAreaView} from "react-native";
import React, {useState} from 'react';
import {observer} from "mobx-react";
import {useRootStore} from "../../../Store/RootStore/UseRootStore";

export const ClickerScreen = observer(() => {
    const { clickerStore } = useRootStore();
    const handleClick = () => {
        clickerStore.actionClick();
    };

    return (
        <SafeAreaView>
            <View>
                <Text>Used context!</Text>
                <Text>Count clicker value: {clickerStore.count}</Text>
                <Text>Double value: {clickerStore.doubleCount}</Text>
                <Button title='Click me' onPress={handleClick} />
            </View>
        </SafeAreaView>
    )
});