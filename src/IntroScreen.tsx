import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import { Dimensions, PixelRatio, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Button, Icon, Image, Text } from "react-native-elements";
import { RootStackParamList } from "./App";
import { images_set } from "./assets/data/onboarding_images_set.json"
import { OnboardingSliderWrapper } from "./components/OnboardingSliderWrapper";

type IntroNavigationProp = StackNavigationProp<RootStackParamList, 'Intro'>;
type IntroProps = { navigation: IntroNavigationProp };

const IntroScreen = ({ navigation }: IntroProps) => {
    const { width, height } = Dimensions.get('window');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <OnboardingSliderWrapper screenWidth={width}>
                <View style={{ width, height }}>
                    <Image source={{ uri: images_set[0] }} style={styles.imageStyle} />
                    <View style={styles.wrapper}>
                        <Text style={styles.header}>Nature Imitates Art</Text>
                        <Text style={styles.paragraph}>....something like that</Text>
                    </View>
                </View>
                <View style={{ width, height }}>
                    <Image source={{ uri: images_set[1] }} style={styles.imageStyle} />
                    <View style={styles.wrapper}>
                        <Text style={styles.header}>High quality Art work</Text>
                        <Text style={styles.paragraph}>... for a fraction of the price</Text>
                    </View>
                </View>
                <View style={{ width, height }}>
                    <Image source={{ uri: images_set[2] }} style={styles.imageStyle} />
                    <View style={styles.wrapper}>
                        <Text style={styles.header}>Top Notch Artists</Text>
                        <Text style={styles.paragraph}>... all in one place</Text>
                    </View>
                </View>
                <View style={{ width, height }}>
                    <Image source={{ uri: images_set[3] }} style={styles.imageStyle} />
                    <View style={styles.wrapper}>
                        <Text style={styles.header}>Best deal on the market</Text>
                        <Text style={styles.paragraph}>... let's find your next art</Text>
                    </View>
                </View>
                <View style={{ width, height }}>
                    <Image source={{ uri: images_set[4] }} style={styles.imageStyle} />
                    <View style={styles.wrapper}>
                        <Text style={styles.header}>It's all about art</Text>
                        <Text style={styles.paragraph}>... seriously, it is</Text>
                    </View>
                </View>
            </OnboardingSliderWrapper>
            <View style={styles.startButtonWrapper}>
                <Button
                    containerStyle={{ width: "80%" }}
                    buttonStyle={{
                        paddingVertical: 16,
                        borderRadius: 8, 
                        backgroundColor: "#3F51B5"
                    }}
                    title="Get Started"
                    type="solid"
                    onPress={() => navigation.navigate('LoginScreen')}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: PixelRatio.getPixelSizeForLayoutSize(135),
        width: '100%',
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 32,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    paragraph: {
        fontSize: 16,
    },
    startButtonWrapper: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        bottom: 64,
    },
});

export { IntroScreen };