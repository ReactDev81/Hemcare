import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, PanResponder, Image } from 'react-native';

const BleedAndPainIntensityScale = () => {

    // Pain intensity state
    const [painValue, setPainValue] = useState(45);
    const painScrollViewRef = useRef(null);
    const [painScrollViewHeight, setPainScrollViewHeight] = useState(300);
    const [painContentHeight, setPainContentHeight] = useState(1000);
    const [painIndicatorPosition, setPainIndicatorPosition] = useState(0);
    const [painDisplayPosition, setPainDisplayPosition] = useState(0);
    const [painScrollPosition, setPainScrollPosition] = useState(0);

    // Bleed intensity state
    const [bleedValue, setBleedValue] = useState(45);
    const bleedScrollViewRef = useRef(null);
    const [bleedScrollViewHeight, setBleedScrollViewHeight] = useState(300);
    const [bleedContentHeight, setBleedContentHeight] = useState(1000);
    const [bleedIndicatorPosition, setBleedIndicatorPosition] = useState(0);
    const [bleedDisplayPosition, setBleedDisplayPosition] = useState(0);
    const [bleedScrollPosition, setBleedScrollPosition] = useState(0);

    const totalLines = 100;
    const lineSpacing = 10;

    // Create scale lines data
    const scaleLines = Array.from({ length: totalLines + 1 }, (_, i) => ({
        isMajor: i % 10 === 0,
        value: totalLines - i,
        position: i * lineSpacing,
    }));

    // Get emoji based on value
    const getEmoji = (val) => {
        if (val >= 80) return '😢';
        if (val >= 60) return '😕';
        if (val >= 40) return '😐';
        if (val >= 20) return '😊';
        return '😁';
    };

    // Update indicator and value display positions for pain scale
    const updatePainPositions = (scrollTop) => {
        const maxScroll = painContentHeight - painScrollViewHeight;
        const scrollPercentage = maxScroll > 0 ? scrollTop / maxScroll : 0;

        // Calculate the new value (inverted)
        const newValue = Math.max(0, Math.min(100, Math.round(100 - (scrollPercentage * 100))));
        setPainValue(newValue);
        setPainScrollPosition(scrollTop);

        // Calculate where the value would be in the visible area
        const valuePosition = (totalLines - newValue) * lineSpacing - scrollTop;

        // Set indicator position - ensure it stays within visible bounds
        const newIndicatorPosition = Math.max(0, Math.min(painScrollViewHeight - 6, valuePosition));
        setPainIndicatorPosition(newIndicatorPosition);

        // Set value display position
        const newDisplayPosition = Math.max(10, Math.min(painScrollViewHeight - 60, newIndicatorPosition - 15));
        setPainDisplayPosition(newDisplayPosition);
    };

    // Update indicator and value display positions for bleed scale
    const updateBleedPositions = (scrollTop) => {
        const maxScroll = bleedContentHeight - bleedScrollViewHeight;
        const scrollPercentage = maxScroll > 0 ? scrollTop / maxScroll : 0;

        // Calculate the new value (inverted)
        const newValue = Math.max(0, Math.min(100, Math.round(100 - (scrollPercentage * 100))));
        setBleedValue(newValue);
        setBleedScrollPosition(scrollTop);

        // Calculate where the value would be in the visible area
        const valuePosition = (totalLines - newValue) * lineSpacing - scrollTop;

        // Set indicator position - ensure it stays within visible bounds
        const newIndicatorPosition = Math.max(0, Math.min(bleedScrollViewHeight - 6, valuePosition));
        setBleedIndicatorPosition(newIndicatorPosition);

        // Set value display position
        const newDisplayPosition = Math.max(10, Math.min(bleedScrollViewHeight - 60, newIndicatorPosition - 15));
        setBleedDisplayPosition(newDisplayPosition);
    };

    // Handle scroll events for pain
    const handlePainScroll = (event) => {
        const scrollTop = event.nativeEvent.contentOffset.y;
        updatePainPositions(scrollTop);
    };

    // Handle scroll events for bleed
    const handleBleedScroll = (event) => {
        const scrollTop = event.nativeEvent.contentOffset.y;
        updateBleedPositions(scrollTop);
    };

    // Set initial positions
    useEffect(() => {
        // Pain slider initial position
        if (painScrollViewHeight > 0 && painContentHeight > 0 && painScrollViewRef.current) {
            const maxScroll = painContentHeight - painScrollViewHeight;
            const initialScrollTop = ((100 - painValue) / 100) * maxScroll;
            
            setTimeout(() => {
                if (painScrollViewRef.current) {
                    painScrollViewRef.current.scrollTo({ y: initialScrollTop, animated: false });
                    updatePainPositions(initialScrollTop);
                }
            }, 100);
        }
    }, [painScrollViewHeight, painContentHeight]);

    useEffect(() => {
        // Bleed slider initial position
        if (bleedScrollViewHeight > 0 && bleedContentHeight > 0 && bleedScrollViewRef.current) {
            const maxScroll = bleedContentHeight - bleedScrollViewHeight;
            const initialScrollTop = ((100 - bleedValue) / 100) * maxScroll;
            
            setTimeout(() => {
                if (bleedScrollViewRef.current) {
                    bleedScrollViewRef.current.scrollTo({ y: initialScrollTop, animated: false });
                    updateBleedPositions(initialScrollTop);
                }
            }, 100);
        }
    }, [bleedScrollViewHeight, bleedContentHeight]);

    // Pain pan responder
    const painPanResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                // Store starting position when drag begins
            },
            onPanResponderMove: (_, gesture) => {
                if (!painScrollViewRef.current) return;
                
                // Calculate new scroll position based on gesture
                const maxScroll = painContentHeight - painScrollViewHeight;
                // Invert the delta y to match scroll direction (drag down = scroll up)
                const newScrollTop = Math.max(0, Math.min(maxScroll, painScrollPosition - gesture.dy));
                
                painScrollViewRef.current.scrollTo({ y: newScrollTop, animated: false });
                updatePainPositions(newScrollTop);
            },
        })
    ).current;

    // Bleed pan responder
    const bleedPanResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                // Store starting position when drag begins
            },
            onPanResponderMove: (_, gesture) => {
                if (!bleedScrollViewRef.current) return;
                
                // Calculate new scroll position based on gesture
                const maxScroll = bleedContentHeight - bleedScrollViewHeight;
                // Invert the delta y to match scroll direction
                const newScrollTop = Math.max(0, Math.min(maxScroll, bleedScrollPosition - gesture.dy));
                
                bleedScrollViewRef.current.scrollTo({ y: newScrollTop, animated: false });
                updateBleedPositions(newScrollTop);
            },
        })
    ).current;

    return (
        <>
            {/* Pain Intensity */}
            <View className='flex mt-3.5 flex-row justify-between items-center h-fit'>
                <View className='flex-1'>
                    <Text className='text-sm text-gray-dark'>Pain Intensity</Text>
                    <Text className='font-semibold text-[64px] text-blue-light mt-9'>{painValue}</Text>
                    <Text className='font-semibold text-sm text-red-dark'>
                        {painValue < 30 ? "Feeling Mild Pain" : painValue < 70 ? "Feeling Moderate Pain" : "Feeling Severe Pain"}
                    </Text>
                </View>
                <View className='w-fit'>
                    <Text className='text-right text-gray-dark font-semibold mb-1'>100 Max</Text>
                    
                    <View className="relative w-20 h-60 bg-white rounded-xl border border-solid border-gray-dark/10">
                        {/* Rotater thumb */}
                        <View 
                            className="absolute top-1/2 -right-2 w-2 h-[52px] rounded-tr-lg rounded-br-lg z-10"
                            style={{ 
                                backgroundColor: 'rgba(92, 102, 121, 0.4)', 
                                transform: [{ translateY: -26 }] 
                            }} 
                        />
                    
                        {/* Value display */}
                        <View 
                            className="absolute -left-[100px] bg-white rounded-lg p-2 flex-row items-center z-20 w-[67px]"
                            style={{ 
                                top: painDisplayPosition,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.1,
                                shadowRadius: 8,
                                elevation: 3
                            }}
                        >
                            <View className='w-2.5 h-2.5 bg-white absolute rotate-45 -right-1.5'
                                style={{ 
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 8,
                                    elevation: 3
                                }}
                            ></View>
                            <Text className="text-xl">{getEmoji(painValue)}</Text>
                            <Text className="text-base font-bold ml-1">{painValue}</Text>
                        </View>
                    
                        {/* Indicator */}
                        <View 
                            className="absolute -left-[17px] w-[86px] h-[6px] bg-[#ff5252] z-10 rounded-tl-sm rounded-bl-sm"
                            style={{ top: painIndicatorPosition }}
                        >
                            <View 
                                className="absolute bottom-[-5px] right-0 w-20 h-[5px]"
                                style={{ backgroundColor: 'rgba(92, 102, 121, 0.5)' }}
                            />
                        </View>
                    
                        {/* Scale wrapper */}
                        <ScrollView
                            ref={painScrollViewRef}
                            className="absolute w-full h-full"
                            showsVerticalScrollIndicator={false}
                            onScroll={handlePainScroll}
                            scrollEventThrottle={16}
                            nestedScrollEnabled={true} 
                            scrollEnabled={true}
                            onLayout={(event) => {
                                setPainScrollViewHeight(event.nativeEvent.layout.height);
                            }}
                            contentContainerStyle={{
                                height: totalLines * lineSpacing
                            }}
                        >
                            <View 
                                className="relative w-20"
                                style={{ height: totalLines * lineSpacing }}
                                onLayout={(event) => {
                                    setPainContentHeight(event.nativeEvent.layout.height);
                                }}
                            >
                                {scaleLines.map((line, index) => (
                                    <React.Fragment key={index}>
                                        <View 
                                            className={`absolute right-[3px] ${line.isMajor ? 'w-10 h-[3px] bg-[#999]' : 'w-[30px] h-[2px] bg-[#ccc]'}`}
                                            style={{ top: line.position }}
                                        />
                                        
                                        {line.isMajor && (
                                            <Text 
                                                className="absolute left-[15px] text-xs text-[#666]"
                                                style={{ top: line.position, transform: [{ translateY: -8 }] }}
                                            >
                                                {line.value}
                                            </Text>
                                        )}
                                    </React.Fragment>
                                ))}
                            </View>
                        </ScrollView>
                    
                        {/* Custom thumb for dragging */}
                        <View 
                            {...painPanResponder.panHandlers}
                            className="absolute right-0 top-0 w-5 h-full z-20"
                        />
                        <Image source={require('../../assets/meter-bg-shape-top.png')} resizeMode="contain" className="mx-auto absolute -top-1 left-0 w-full object-contain" />
                        <Image source={require('../../assets/meter-bg-shape-bottom.png')} resizeMode="contain" className="mx-auto absolute -bottom-1 left-0 w-full object-contain" />
                    </View>
                    
                    <Text className='text-right text-gray-dark font-semibold mt-1'>0 Min</Text>
                </View>
            </View>

            {/* Bleed Intensity */}
            <View className='flex mt-3.5 flex-row justify-between items-center h-fit'>
                <View className='flex-1'>
                    <Text className='text-sm text-gray-dark'>Bleed Intensity</Text>
                    <Text className='font-semibold text-[64px] text-blue-light mt-9'>{bleedValue}</Text>
                    <Text className='font-semibold text-sm text-red-dark'>
                        {bleedValue < 30 ? "Bleed is Mild" : bleedValue < 70 ? "Bleed is Moderate" : "Bleed is Severe"}
                    </Text>
                </View>
                <View className='w-fit'>
                    <Text className='text-right text-gray-dark font-semibold mb-1'>100 Max</Text>
                    
                    <View className="relative w-20 h-60 bg-white rounded-xl border border-solid border-gray-dark/10">
                        
                        {/* Rotater thumb */}
                        <View 
                            className="absolute top-1/2 -right-2 w-2 h-[52px] rounded-tr-lg rounded-br-lg z-10"
                            style={{ 
                                backgroundColor: 'rgba(92, 102, 121, 0.4)', 
                                transform: [{ translateY: -26 }] 
                            }} 
                        />
                    
                        {/* Value display */}
                        <View 
                            className="absolute -left-[105px] bg-white rounded-lg p-2 flex-row items-center z-20 w-[67px]"
                            style={{ 
                                top: bleedDisplayPosition,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.1,
                                shadowRadius: 8,
                                elevation: 3
                            }}
                        >
                            <View className='absolute -right-1.5 w-2.5 h-2.5 bg-white rotate-45 z-10'
                                style={{ 
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 8,
                                    elevation: 3
                                }}
                            ></View>
                            <Text className="text-xl">{getEmoji(bleedValue)}</Text>
                            <Text className="text-base font-bold ml-1">{bleedValue}</Text>
                        </View>
                    
                        {/* Indicator */}
                        <View 
                            className="absolute -left-[17px] w-[86px] h-[6px] bg-[#ff5252] z-10 rounded-tl-sm rounded-bl-sm"
                            style={{ top: bleedIndicatorPosition }}
                        >
                            <View 
                                className="absolute bottom-[-5px] right-0 w-20 h-[5px]"
                                style={{ backgroundColor: 'rgba(92, 102, 121, 0.5)' }}
                            />
                        </View>
                    
                        {/* Scale wrapper */}
                        <ScrollView
                            ref={bleedScrollViewRef}
                            className="absolute w-full h-full"
                            showsVerticalScrollIndicator={false}
                            onScroll={handleBleedScroll}
                            scrollEventThrottle={16}
                            nestedScrollEnabled={true} 
                            scrollEnabled={true}
                            onLayout={(event) => {
                                setBleedScrollViewHeight(event.nativeEvent.layout.height);
                            }}
                            contentContainerStyle={{
                                height: totalLines * lineSpacing
                            }}
                        >
                            <View 
                                className="relative w-20"
                                style={{ height: totalLines * lineSpacing }}
                                onLayout={(event) => {
                                    setBleedContentHeight(event.nativeEvent.layout.height);
                                }}
                            >
                                {scaleLines.map((line, index) => (
                                    <React.Fragment key={index}>
                                        <View 
                                            className={`absolute right-[3px] ${line.isMajor ? 'w-10 h-[3px] bg-[#999]' : 'w-[30px] h-[2px] bg-[#ccc]'}`}
                                            style={{ top: line.position }}
                                        />
                                        
                                        {line.isMajor && (
                                            <Text 
                                                className="absolute left-[15px] text-xs text-[#666]"
                                                style={{ top: line.position, transform: [{ translateY: -8 }] }}
                                            >
                                                {line.value}
                                            </Text>
                                        )}
                                    </React.Fragment>
                                ))}
                            </View>
                        </ScrollView>
                    
                        {/* Custom thumb for dragging */}
                        <View 
                            {...bleedPanResponder.panHandlers}
                            className="absolute right-0 top-0 w-5 h-full z-20"
                        />
                        <Image source={require('../../assets/meter-bg-shape-top.png')} resizeMode="contain" className="mx-auto absolute -top-1 left-0 w-full object-contain" />
                        <Image source={require('../../assets/meter-bg-shape-bottom.png')} resizeMode="contain" className="mx-auto absolute -bottom-1 left-0 w-full object-contain" />
                    </View>
                    
                    <Text className='text-right text-gray-dark font-semibold mt-1'>0 Min</Text>
                </View>
            </View>
        </>
    );
};

export default BleedAndPainIntensityScale;