import {observer} from "mobx-react";
import {useRootStore} from "../../Store/RootStore/UseRootStore";
import {
    ActivityIndicator, Button,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import {useEffect} from "react";


export const PostsScreen = observer(({navigation}) => {
        const { postsStore } = useRootStore();

        useEffect(() => {
            postsStore.getPosts();
        }, []);

        return <SafeAreaView style={styles.container}>
            <Button
                title='Remove all posts from local store'
                onPress={() => postsStore.removePostsFromLocal()}
            />
            <ScrollView style={styles.content}>
                {!postsStore.isLoading ? (
                    postsStore.posts.map((post, i) => {
                        return (
                            <View key={`item_${i}`} style={styles.post}>
                                <Text style={styles.postId}>ID: {post.id}</Text>
                                <Text style={styles.postBody}>Body: {post.body}</Text>
                            </View>
                        );
                    })
                ) : (
                    <ActivityIndicator />
                )}
            </ScrollView>
        </SafeAreaView>
    }
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dce8fc'
    },
    content: {
        flex: 1,
        padding: 16
    },
    post: {
        margin: 8,
        padding: 8,
        borderWidth: 1,
        borderRadius: 8,
    },
    postId: {
        fontWeight: 'bold',
        marginBottom: 8
    },
    postBody: {
        color: 'gray'
    }
})