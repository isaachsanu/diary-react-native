import { StackNavigationProp } from "@react-navigation/stack";
import { Card } from "@rneui/base";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { RootStackParamList } from "./App";
import { Header } from "./components/Header";

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;
type HomeProps = { navigation: HomeNavigationProp };

const HomeScreen = ({ navigation }: HomeProps) => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <Header />
            <View style={styles.container}>
                <Text style={styles.title}>Hi, Isa</Text>
                <Card containerStyle={styles.homeCard}>
                    <Text style={styles.homeCardText}>Apa yang kamu alami hari ini?</Text>
                </Card>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF',
        paddingHorizontal: 16,
    },
    homeCard: { 
        marginTop: 16,
        margin: 0, 
        borderRadius: 8, 
        backgroundColor: '#3F51B5', 
        borderWidth: 0 
    },
    homeCardText: {
        color: '#fff'
    },
    title: {
        fontSize: 32
    },
    heading: {
        fontSize: 16
    },
});

export { HomeScreen };