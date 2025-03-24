import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Svg, { Path, G, Defs, Rect, ClipPath } from 'react-native-svg';
import Select from '../../ui/form/select';

const ProphylaxisDate = () => {

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');

    const onChange = (event, selectedDate) => {
        setShow(false); 
        if (selectedDate) {
            setDate(selectedDate); 
        }
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatePicker = () => {
        showMode('date');
    };

    const showTimePicker = () => {
        showMode('time');
    };

    const [selectedValue, setSelectedValue] = useState(null); 

    return(
        <View className="w-full">

            <Pressable onPress={showDatePicker} className="mt-5" activeOpacity={1}>
                <Text className="text-gray-dark text-sm leading-4">Date</Text>
                <View className={`border border-solid rounded-[10px] py-4 px-5 bg-transparent mt-1 flex flex-row items-center justify-between border-gray-dark`}>
                    <Text className="text-gray-dark text-sm leading-4">{date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
                    <View>
                        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M15.8974 2.13333V0.769231C15.8974 0.565218 15.8164 0.369561 15.6721 0.225302C15.5279 0.0810436 15.3322 0 15.1282 0C14.9242 0 14.7285 0.0810436 14.5843 0.225302C14.44 0.369561 14.359 0.565218 14.359 0.769231V2.05128H5.64103V0.769231C5.64103 0.565218 5.55998 0.369561 5.41572 0.225302C5.27146 0.0810436 5.07581 0 4.8718 0C4.66778 0 4.47213 0.0810436 4.32787 0.225302C4.18361 0.369561 4.10256 0.565218 4.10256 0.769231V2.13333C2.96101 2.31376 1.92108 2.89496 1.16925 3.77272C0.417428 4.65047 0.00289719 5.76736 0 6.92308V15.1282C0 16.4203 0.513277 17.6594 1.42692 18.5731C2.34055 19.4867 3.57971 20 4.8718 20H15.1282C16.4203 20 17.6594 19.4867 18.5731 18.5731C19.4867 17.6594 20 16.4203 20 15.1282V6.92308C19.9971 5.76736 19.5826 4.65047 18.8307 3.77272C18.0789 2.89496 17.039 2.31376 15.8974 2.13333ZM4.8718 3.58974H15.1282C15.8763 3.59257 16.6018 3.847 17.1878 4.31209C17.7738 4.77718 18.1863 5.42589 18.359 6.15385H1.64103C1.81367 5.42589 2.22619 4.77718 2.8122 4.31209C3.39822 3.847 4.12365 3.59257 4.8718 3.58974ZM15.1282 18.4615H4.8718C3.98857 18.4588 3.1423 18.1068 2.51776 17.4822C1.89323 16.8577 1.54117 16.0114 1.53846 15.1282V7.69231H18.4615V15.1282C18.4588 16.0114 18.1068 16.8577 17.4822 17.4822C16.8577 18.1068 16.0114 18.4588 15.1282 18.4615Z" fill="#5C6679"/>
                            <Path d="M15.1923 12H9.80769C9.59348 12 9.38804 12.1054 9.23657 12.2929C9.0851 12.4804 9 12.7348 9 13C9 13.2652 9.0851 13.5196 9.23657 13.7071C9.38804 13.8946 9.59348 14 9.80769 14H15.1923C15.4065 14 15.612 13.8946 15.7634 13.7071C15.9149 13.5196 16 13.2652 16 13C16 12.7348 15.9149 12.4804 15.7634 12.2929C15.612 12.1054 15.4065 12 15.1923 12Z" fill="#5C6679"/>
                            <Path d="M6.1 12H4.9C4.66131 12 4.43239 12.1054 4.2636 12.2929C4.09482 12.4804 4 12.7348 4 13C4 13.2652 4.09482 13.5196 4.2636 13.7071C4.43239 13.8946 4.66131 14 4.9 14H6.1C6.3387 14 6.56761 13.8946 6.7364 13.7071C6.90518 13.5196 7 13.2652 7 13C7 12.7348 6.90518 12.4804 6.7364 12.2929C6.56761 12.1054 6.3387 12 6.1 12Z" fill="#5C6679"/>
                        </Svg>
                    </View>
                </View>
            </Pressable>

            <Pressable onPress={showTimePicker} className="mt-5" activeOpacity={1}>
                <Text className="text-gray-dark text-sm leading-4">Time</Text>
                <View className={`border border-solid rounded-[10px] py-4 px-5 bg-transparent mt-1 flex flex-row items-center justify-between border-gray-dark`}>
                    <Text className="text-gray-dark text-sm leading-4">{date.toLocaleTimeString()}</Text>
                    <View>
                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G clip-path="url(#clip0_214_711)">
                                <Path d="M0.359172 5.35315C0.515735 5.47128 0.699954 5.53034 0.884172 5.53034C1.14527 5.53034 1.40589 5.41222 1.57652 5.18581C2.28948 4.2469 3.12433 3.41206 4.05995 2.70284C4.44245 2.41409 4.51886 1.868 4.22683 1.4855C3.93808 1.103 3.39198 1.02987 3.00948 1.31862C1.94542 2.12534 0.999016 3.07503 0.192297 4.13581C-0.100203 4.51831 -0.0233276 5.06112 0.359172 5.35315Z" fill="#5C6679"/>
                                <Path d="M20.9923 1.31484C20.6098 1.02609 20.0637 1.09921 19.7749 1.48171C19.4862 1.86421 19.5593 2.41031 19.9418 2.69906C20.8774 3.40874 21.7155 4.24687 22.4252 5.18249C22.5959 5.40843 22.8565 5.52703 23.1176 5.52703C23.3018 5.52703 23.4865 5.46796 23.6426 5.34984C24.0251 5.06109 24.0982 4.51499 23.8095 4.13249C23.0027 3.07124 22.0568 2.12156 20.9923 1.31484Z" fill="#5C6679"/>
                                <Path d="M1.24927 13.2488C1.24927 15.8991 2.2163 18.3272 3.81286 20.2055L2.63021 21.3914C2.28942 21.7322 2.28942 22.282 2.63021 22.6228C2.80083 22.7934 3.02302 22.8769 3.24567 22.8769C3.46833 22.8769 3.69099 22.7934 3.86114 22.6228L5.0438 21.4369C6.9188 23.0334 9.34974 24.0005 12.0005 24.0005C14.6335 24.0005 17.0508 23.0475 18.9221 21.4683L20.101 22.658C20.2716 22.8286 20.4938 22.9153 20.7202 22.9153C20.9429 22.9153 21.1618 22.8319 21.3324 22.665C21.6732 22.3275 21.6769 21.7781 21.3394 21.4336L20.1605 20.2406C21.7744 18.3591 22.7555 15.9173 22.7555 13.2492C22.7555 7.61437 18.3971 2.985 12.8771 2.53641V0.869531C12.8771 0.389531 12.4875 0 12.0075 0C11.5275 0 11.138 0.389531 11.138 0.869531V2.53922C5.61146 2.98078 1.24927 7.61391 1.24927 13.2488ZM11.9208 4.23984C11.9485 4.24312 12.06 4.23984 12.0877 4.23984C17.0166 4.28484 21.0165 8.30953 21.0165 13.2488C21.0132 18.2194 16.9679 22.2609 12.001 22.2609C7.03411 22.2609 2.9888 18.2189 2.9888 13.2488C2.9888 8.30953 6.98864 4.28531 11.9208 4.23984Z" fill="#5C6679"/>
                                <Path d="M11.3992 13.875C11.3992 13.8783 11.3992 13.8783 11.3992 13.875L14.9121 17.249C15.0827 17.4126 15.2983 17.4923 15.5139 17.4923C15.7436 17.4923 15.9696 17.4018 16.1402 17.2247C16.4739 16.8768 16.4603 16.3275 16.1158 15.997L12.8707 12.877V8.19888C12.8707 7.71888 12.4811 7.32935 12.0011 7.32935C11.5211 7.32935 11.1316 7.71888 11.1316 8.19888V13.2529C11.1316 13.4958 11.2357 13.7184 11.3992 13.875Z" fill="#5C6679"/>
                            </G>
                            <Defs>
                                <ClipPath id="clip0_214_711">
                                    <Rect width="24" height="24" fill="white"/>
                                </ClipPath>
                            </Defs>
                        </Svg>
                    </View>
                </View>
            </Pressable>

            <View className="mt-5">
                <Text className="text-gray-dark text-sm leading-4 mb-2">Where did you recieve this treatment?</Text>
                <Select 
                    value={selectedValue}
                    setValue={(value) => {
                        setSelectedValue(value);
                    }}  
                    placeholder="Reason for not Treated" 
                    items={[
                        {label: "Home", value: "home"}, 
                        {label: "HTC/Hospital", value: "htc_hospital"},
                        {label: "Other", value: "other"},
                    ]}
                /> 
            </View>

            {show && (
                <DateTimePicker
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    )
}

export default ProphylaxisDate