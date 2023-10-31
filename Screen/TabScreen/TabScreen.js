import { createBottomTabNavigator }from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Button, View, Text, StyleSheet} from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} options={{headerShown: false}} />
            <Tab.Screen name="News" component={NewsScreen}/>
            <Tab.Screen name="Chat" component={ChatScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
    );
}
export const HomeStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'HomeScreen'}
                component={HomeScreen}
                options={{
                    headerRight: () => (
                        <Button
                            title='About'
                            onPress={() => navigation.navigate('AboutApp')}
                        />
                    )
                }}
            />
            <Stack.Screen name={'AboutApp'} component={AboutAppScreen} />
        </Stack.Navigator>
    );
}

function HomeScreen() {
    return (
        <View>
            <Text style={styles.defaultText}>Home</Text>
        </View>
    );
}

function NewsScreen() {
    return (
        <View>
            <Text style={styles.defaultText}>News</Text>
        </View>
    );
}

function ChatScreen() {
    return (
        <View>
            <Text style={styles.defaultText}>Chat</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View>
            <Text style={styles.defaultText}>Settings</Text>
        </View>
    );
}

function AboutAppScreen({navigation}) {
    return (
        <View>
            <Text style={styles.defaultText}>About app</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    defaultText: {
        fontWeight: '400',
        color: 'black',
        fontSize: 18
    }
})