import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import LottieView from 'lottie-react-native';

const Splash = () => {
    const AnimatedText = Animated.createAnimatedComponent(Text);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const textAnimations = useRef(
        'HemCare'.split('').map(() => new Animated.Value(0))
    ).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        const letterAnimations = textAnimations.map((anim, index) =>
            Animated.timing(anim, {
                toValue: 1,
                duration: 500,
                delay: index * 100,
                useNativeDriver: true,
            })
        );

        Animated.stagger(50, letterAnimations).start();
    }, []);

    return (
        <View className="flex-1 items-center justify-center w-full">
            <LottieView
                source={{ uri: 'https://lottie.host/a3530835-b0c5-43d4-b38f-986b10d658d6/nlnRM0SPaH.json' }}
                autoPlay
                loop
                style={{ width: 120, height: 120 }}
            />
            
            {/* Ensure text stays in a row */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {'HemCare'.split('').map((letter, index) => (
                    <AnimatedText
                        key={index}
                        style={{
                            fontSize: 24,
                            fontWeight: '600',
                            color: '#151F31',
                            letterSpacing: 1,
                            opacity: textAnimations[index],
                            transform: [
                                {
                                    translateY: textAnimations[index].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [50, 0],
                                    }),
                                },
                            ],
                        }}
                    >
                        {letter}
                    </AnimatedText>
                ))}
            </View>
        </View>
    );
};

export default Splash;