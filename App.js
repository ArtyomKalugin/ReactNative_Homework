import {Button, Text, View, TextInput, StyleSheet, Pressable, ScrollView} from 'react-native';
import {useState} from "react";
import React from 'react';

export default function App() {
    return (
        <View style={styles.container}>
            <LoginForm/>
            <View style={styles.emptyView}/>
            <Boxes/>
        </View>
    );
};

function LoginForm() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isCorrectData, setCorrectData] = useState(false);
    const [shouldShowError, setShouldShowError] = useState(false);

    const validateData = () => {
        if (login === 'Artem' && password === '123456') {
            setCorrectData(true);
            setShouldShowError(false)
        } else {
            setCorrectData(false);
            setShouldShowError(true)
        }
    }

    if (isCorrectData) {
        return <Welcome />;
    } else {
        return (
            <View style={styles.loginView}>
                {shouldShowError && <Text style={styles.errorText}>Incorrect data</Text>}
                {shouldShowError && <View style={styles.emptyView} />}
                <TextInput
                    style={styles.textInput}
                    placeholder="Login"
                    onChangeText={text => setLogin(text)}

                />
                <View style={styles.emptyView}></View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                />
                <View style={styles.emptyView}></View>
                <Button
                    title='Sign in'
                    onPress={validateData}
                />
            </View>
        );
    }
}

function Welcome() {
    return (
        <View style={styles.loginView}>
            <Text style={styles.welcomeText}>Welcome</Text>
        </View>
    );
}

function Boxes() {
    let [boxes, setBoxes] = useState([]);
    let [size, setSize] = useState(0);
    let [color, setColor] = useState('');

    const addBox = (size, color) => {
        setBoxes([...boxes, {
            width: size,
            height: size,
            color: color}
        ]);
    };

    const deleteBoxes = () => {
        setBoxes([]);
    }

    const yellowPressableTapped = () => {
        setColor('yellow')
    }

    const bluePressableTapped = () => {
        setColor('blue')
    }

    const redPressableTapped = () => {
        setColor('red')
    }

    const setValues = () => {
        addBox(size, color)
    }

    return (
        <View style={styles.boxesView}>
            <BoxesContainer boxes={boxes}/>
            <View style={styles.emptyView}/>
            <View style={styles.parametersView}>
                <Text style={styles.defaultText}>Размер</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={size => setSize(parseInt(size))}
                    keyboardType='numeric'
                />
            </View>
            <View style={styles.emptyView}/>
            <View style={styles.parametersView}>
                <Text style={styles.defaultText}>Цвет</Text>
                <Pressable
                    style={styles.yellowPressable}
                    onPress={yellowPressableTapped}
                />
                <Pressable
                    style={styles.bluePressable}
                    onPress={bluePressableTapped}
                />
                <Pressable
                    style={styles.redPressable}
                    onPress={redPressableTapped}
                />
            </View>
            <View style={styles.parametersView}>
                <Button
                    title='ДОБАВИТЬ'
                    onPress={setValues}
                />
                <Button
                    title='ОЧИСТИТЬ'
                    onPress={deleteBoxes}
                />
            </View>
        </View>
    );
}

function BoxesContainer(props) {
    const boxes = props.boxes.map(box => <Box
        key={Date.now() * Math.random()}
        width={box.width}
        height={box.height}
        color={box.color}
        borderColor={box.borderColor}
    />);

    return (
        <ScrollView style={styles.scrollView}>
            {boxes}
        </ScrollView>
    )
}

export const Box = (props) => (
    <View style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.color
    }} />
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    textInput: {
        minWidth: 80,
        padding: 8,
        backgroundColor: '#f5f5f5'
    },
    emptyView: {
        height: 20,
        width: 100
    },
    loginView: {
        borderWidth: 1,
        padding: 20,
        borderColor: 'black'
    },
    boxesView: {
        borderWidth: 1,
        padding: 20,
        borderColor: 'blue'
    },
    welcomeText: {
        fontWeight: '600',
        fontSize: 24
    },
    errorText: {
        fontWeight: '400',
        color: 'red',
        fontSize: 18
    },
    defaultText: {
        fontWeight: '200',
        color: 'black',
        fontSize: 16
    },
    scrollView: {
        width: 300,
        height: 300,
    },
    parametersView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginHorizontal: 12,
        gap: 15
    },
    yellowPressable: {
        backgroundColor: 'yellow',
        width: 30,
        height: 20,
        borderRadius: 4
    },
    bluePressable: {
        backgroundColor: 'blue',
        width: 30,
        height: 20,
        borderRadius: 4
    },
    redPressable: {
        backgroundColor: 'red',
        width: 30,
        height: 20,
        borderRadius: 4
    }
});