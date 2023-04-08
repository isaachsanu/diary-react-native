import { ReactNode, useState } from "react";
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View } from "react-native";

interface MyComponentProps {
    screenWidth: number;
    children: ReactNode;
}

const OnboardingSliderWrapper: React.FC<MyComponentProps> = ({ children, screenWidth }) => {
    const [sliderState, setSliderState] = useState({ currentPage: 0 });

    const setSliderPage = (event: any) => {
        const { currentPage } = sliderState;
        const { x } = event.nativeEvent.contentOffset;
        const indexOfNextScreen: number = Math.floor(x / screenWidth);
        if (indexOfNextScreen !== currentPage) {
            setSliderState({
                ...sliderState,
                currentPage: indexOfNextScreen,
            });
        }
    };
    const { currentPage: pageIndex } = sliderState;

    return (
        <>
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
                {children}
            </ScrollView>
            <View style={styles.paginationWrapper}>
                {Array.from(Array(5).keys()).map((key, index) => (
                    <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
                ))}
            </View>
        </>
    );
}

OnboardingSliderWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
    paginationWrapper: {
        position: 'absolute',
        bottom: 160,
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
        backgroundColor: '#3F51B5',
        marginLeft: 8,
    },
});

export { OnboardingSliderWrapper };