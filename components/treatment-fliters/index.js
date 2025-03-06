import {View, Text, Pressable, ScrollView} from 'react-native';
import FlatButton from '../ui/FlatButton'
import Svg, {Path} from 'react-native-svg';
import SortBy from './sortBy'
import BodyParts from './bodyParts';

const CloseIcon = () => {
    return(
        <Svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.9485 3.85896C7.16781 4.63792 5.90389 4.63792 5.1232 3.85896L1.51494 0.258665C1.16896 -0.0865469 0.608834 -0.0865472 0.262858 0.258664C-0.0842019 0.604958 -0.0842011 1.16722 0.262859 1.51352L3.86208 5.10479C4.64522 5.88619 4.64522 7.15494 3.86208 7.93634L0.262891 11.5276C-0.0841686 11.8739 -0.0841688 12.4361 0.262891 12.7824C0.608867 13.1276 1.16899 13.1276 1.51497 12.7824L5.1232 9.18217C5.90389 8.40321 7.16781 8.40321 7.9485 9.18217L11.5566 12.7823C11.9025 13.1275 12.4627 13.1275 12.8086 12.7823C13.1557 12.436 13.1557 11.8737 12.8086 11.5274L9.20962 7.93634C8.42648 7.15494 8.42648 5.88619 9.20962 5.10479L12.8087 1.5137C13.1557 1.1674 13.1557 0.605138 12.8087 0.258844C12.4627 -0.0863671 11.9026 -0.0863673 11.5566 0.258844L7.9485 3.85896Z" fill="#1E293B"/>
        </Svg>
    )
}

const TreatmentFilters = ({onpress}) => {
    return(
        <View className="mt-auto bg-white h-[90%] rounded-[20px] border-[#151F311A] border border-solid relative w-full">

            <View className="flex-row justify-between items-center p-6 border-b border-solid border-[#151F311A]">
                <Text className="font-bold text-base leading-5">Filter and Sort</Text>
                <Pressable onPress={onpress} activeOpacity={1}>
                    <CloseIcon />
                </Pressable>
            </View>

            <ScrollView>
                <View className="p-6">
                    <SortBy />
                    <BodyParts />
                </View>
            </ScrollView>
            
            
            <View className="flex-row items-center justify-between absolute bottom-0 w-full px-5 py-4 bg-white border-[#151F311A] border-t border-solid">
                <View className="w-2/4">
                    <Text className="text-lg leading-[21.6px] font-semibold text-blue-dark">Clear Filters</Text>
                </View>
                <View className="w-2/4">
                    <FlatButton text="Apply" classname="bg-red-dark w-full" />
                </View>
            </View>

        </View>
    )
}

export default TreatmentFilters;