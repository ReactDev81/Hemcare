import { measure, useAnimatedRef, useAnimatedStyle, useSharedValue, withTiming, runOnUI } from 'react-native-reanimated';
import { useCallback } from 'react';

const useAccordion = () => {
    const animatedRef = useAnimatedRef();
    const isOpened = useSharedValue(true);
    const height = useSharedValue(0);

    const animatedHeightStyle = useAnimatedStyle(() => ({
        height: withTiming(height.value),
    }));

    const setHeight = useCallback(() => {
        'worklet';
        const measuredHeight = measure(animatedRef)?.height || 0; 
        height.value = !height.value ? measuredHeight : 0;
        isOpened.value = !isOpened.value;
    }, []);

    const handleLayout = () => {
        runOnUI(() => {
            const measuredHeight = measure(animatedRef)?.height || 0; 
            height.value = measuredHeight;
        })();
    };

    return {
        animatedRef,
        setHeight,
        isOpened,
        animatedHeightStyle,
        handleLayout
    };
};

export default useAccordion;

