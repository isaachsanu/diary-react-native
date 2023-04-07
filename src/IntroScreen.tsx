import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import { Dimensions, PixelRatio, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Image, Text } from "react-native-elements";
import { RootStackParamList } from "./App";
import { images_set } from "./assets/data/onboarding_images_set.json"

type IntroNavigationProp = StackNavigationProp<RootStackParamList, 'Intro'>;
type IntroProps = { navigation: IntroNavigationProp };

const IntroScreen = ({ navigation }: IntroProps) => {
    const [sliderState, setSliderState] = useState({ currentPage: 0 });
    const { width, height } = Dimensions.get('window');

    const setSliderPage = (event: any) => {
        const { currentPage } = sliderState;
        const { x } = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.floor(x / width);
        if (indexOfNextScreen !== currentPage) {
            setSliderState({
                ...sliderState,
                currentPage: indexOfNextScreen,
            });
        }
    };
    const { currentPage: pageIndex } = sliderState;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                style={{ flex: 1 }}
                horizontal={true}
                scrollEventThrottle={16}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={(event: any) => {
                    setSliderPage(event);
                }}
            >
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
            </ScrollView>
            <View style={styles.paginationWrapper}>
                {Array.from(Array(5).keys()).map((key, index) => (
                    <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
                ))}
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
    paginationWrapper: {
        position: 'absolute',
        bottom: 96,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    paginationDots: {
        height: 8,
        width: 8,
        borderRadius: 8 / 2,
        backgroundColor: '#0898A0',
        marginLeft: 8,
    },
});

export { IntroScreen };