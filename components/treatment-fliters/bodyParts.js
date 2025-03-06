import {View, Text, Pressable} from 'react-native';
import { useState} from 'react';
import Animated, {useAnimatedStyle, withTiming, runOnUI} from 'react-native-reanimated';
import Svg, {Path, Mask, G} from 'react-native-svg';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import useAccordian from '../../hooks/useAccordian';
import RadioBox from '../ui/form/radio-box';

const BodyParts = () => {

    const [bodyParts, setBodyParts] = useState('All');
    const { setHeight, animatedHeightStyle, animatedRef, isOpened, handleLayout} = useAccordian();

    const bodyPartsSelection = (value) => {
        setBodyParts(value);
    };

    const animatedChevronStyle = useAnimatedStyle(() => ({
        transform: [{ rotate: withTiming(`${isOpened.value ? 180 : 0}deg`, { duration: 200 }) }],
    }));

    const AllIcon = () => {
        return(
            <Svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M12.75 6.36364C14.4912 6.36364 15.9079 4.93617 15.9079 3.18182C15.9079 1.42747 14.4912 0 12.75 0C11.0088 0 9.5921 1.42747 9.5921 3.18182C9.5921 4.93617 11.0088 6.36364 12.75 6.36364ZM12.75 1.27273C13.7948 1.27273 14.6447 2.12908 14.6447 3.18182C14.6447 4.23455 13.7948 5.09091 12.75 5.09091C11.7052 5.09091 10.8553 4.23455 10.8553 3.18182C10.8553 2.12908 11.7052 1.27273 12.75 1.27273ZM19.0658 17.8182V11.4545C19.0658 9.34908 17.366 7.63636 15.2763 7.63636H10.2237C8.13405 7.63636 6.43421 9.34908 6.43421 11.4545V17.8182C6.43421 18.8709 7.28413 19.7273 8.32895 19.7273H8.96053V26.0909C8.96053 27.1436 9.81044 28 10.8553 28H11.4868C11.9739 28 12.414 27.8087 12.75 27.5035C13.086 27.8087 13.5261 28 14.0132 28H14.6447C15.6896 28 16.5395 27.1436 16.5395 26.0909V19.7273H17.1711C18.2159 19.7273 19.0658 18.8709 19.0658 17.8182ZM15.9079 11.4545C15.5588 11.4545 15.2763 11.7395 15.2763 12.0909V26.0909C15.2763 26.442 14.9932 26.7273 14.6447 26.7273H14.0132C13.6647 26.7273 13.3816 26.442 13.3816 26.0909V19.7273C13.3816 19.3755 13.0988 19.0909 12.75 19.0909C12.4012 19.0909 12.1184 19.3755 12.1184 19.7273V26.0909C12.1184 26.442 11.835 26.7273 11.4868 26.7273H10.8553C10.5071 26.7273 10.2237 26.442 10.2237 26.0909V12.0909C10.2237 11.7395 9.94089 11.4545 9.5921 11.4545C9.24332 11.4545 8.96053 11.7395 8.96053 12.0909V18.4545H8.32895C7.98078 18.4545 7.69737 18.1693 7.69737 17.8182V11.4545C7.69737 10.051 8.83069 8.90909 10.2237 8.90909H15.2763C16.6696 8.90909 17.8026 10.051 17.8026 11.4545V17.8182C17.8026 18.1693 17.5195 18.4545 17.1711 18.4545H16.5395V12.0909C16.5395 11.7395 16.257 11.4545 15.9079 11.4545ZM7.06579 27.3636C7.06579 27.7154 6.783 28 6.43421 28H3.90789C2.16674 28 0.75 26.5725 0.75 24.8182V3.18182C0.75 1.42747 2.16674 0 3.90789 0H6.43421C6.783 0 7.06579 0.284934 7.06579 0.636364C7.06579 0.987793 6.783 1.27273 6.43421 1.27273H3.90789C2.86308 1.27273 2.01316 2.12908 2.01316 3.18182V24.8182C2.01316 25.8709 2.86308 26.7273 3.90789 26.7273H6.43421C6.783 26.7273 7.06579 27.0119 7.06579 27.3636ZM24.75 3.18182V24.8182C24.75 26.5725 23.3333 28 21.5921 28H19.0658C18.7167 28 18.4342 27.7154 18.4342 27.3636C18.4342 27.0119 18.7167 26.7273 19.0658 26.7273H21.5921C22.6369 26.7273 23.4868 25.8709 23.4868 24.8182V3.18182C23.4868 2.12908 22.6369 1.27273 21.5921 1.27273H19.0658C18.7167 1.27273 18.4342 0.987793 18.4342 0.636364C18.4342 0.284934 18.7167 0 19.0658 0H21.5921C23.3333 0 24.75 1.42747 24.75 3.18182Z" fill={bodyParts === 'All' ? "#14B8A6" : '#5C6679'}/>
            </Svg>
        )
    }
    
    const JointIcon = () => {
        return(
            <Svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Mask id="mask0_767_1030" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="26" height="25">
                    <Path d="M1.25 0.5V24.5H25.25V0.5H1.25Z" fill="white" stroke="white"/>
                </Mask>
                <G mask="url(#mask0_767_1030)">
                    <Path d="M4.41693 17.1901L1.78578 19.8213L5.92904 23.9645L8.56019 21.3333C9.2767 20.6167 10.3282 20.264 11.2988 20.5554C12.2981 20.8554 13.426 20.6107 14.2154 19.8213C15.3595 18.6772 15.3595 16.8221 14.2154 15.678C13.0713 14.5339 11.2163 14.5339 10.0722 15.678C11.2163 14.5339 11.2163 12.6789 10.0722 11.5348C8.92811 10.3907 7.07308 10.3907 5.92904 11.5348C5.13959 12.3243 4.89486 13.4522 5.19486 14.4514C5.48622 15.422 5.13353 16.4735 4.41693 17.1901Z" stroke={bodyParts === 'Joint' ? "#14B8A6" : '#5C6679'} stroke-miterlimit="10"/>
                    <Path d="M17.9399 3.66655L20.571 1.0354L24.7142 5.17861L22.0831 7.80977C21.3665 8.52632 21.0138 9.57783 21.3052 10.5484C21.6052 11.5477 21.3605 12.6756 20.571 13.465C19.4269 14.6091 17.5719 14.6091 16.4278 13.465C15.2838 12.3209 15.2838 10.4659 16.4278 9.32183C15.2838 10.4659 13.4287 10.4659 12.2846 9.32183C11.1405 8.17773 11.1405 6.32271 12.2846 5.17861C13.074 4.38921 14.2019 4.14448 15.2012 4.44443C16.1718 4.73584 17.2233 4.38315 17.9399 3.66655Z" stroke={bodyParts === 'Joint' ? "#14B8A6" : '#5C6679'} stroke-miterlimit="10"/>
                    <Path d="M9.18571 10.8257C9.40026 10.3045 9.71921 9.81611 10.1426 9.39268C10.5661 8.96924 11.0544 8.65029 11.5757 8.43579" stroke={bodyParts === 'Joint' ? "#14B8A6" : '#5C6679'} stroke-miterlimit="10"/>
                    <Path d="M17.3143 14.1746C17.0998 14.6958 16.7808 15.1842 16.3574 15.6076C15.934 16.0311 15.4456 16.35 14.9244 16.5645" stroke={bodyParts === 'Joint' ? "#14B8A6" : '#5C6679'} stroke-miterlimit="10"/>
                </G>
            </Svg>
        )
    }

    const MuscleIcon = () => {
        return(
            <Svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M18.2305 7.08721C18.1972 6.25667 18.5249 5.43354 19.1296 4.8289L20.75 3.20847L17.5415 0L15.9211 1.62043C15.3164 2.22507 14.4933 2.55277 13.6628 2.51949C11.3057 2.42507 8.63126 3.63597 6.50861 5.75862C4.38596 7.88127 3.17511 10.5558 3.26948 12.9128C3.30272 13.7433 2.97507 14.5665 2.37042 15.1711L0.75 16.7915L3.95846 20L5.57889 18.3796C6.18346 17.7749 7.00658 17.4472 7.83716 17.4805C10.1942 17.5749 12.8687 16.364 14.9913 14.2414C17.114 12.1187 18.3249 9.44428 18.2305 7.08721ZM17.5415 1.65726L19.0927 3.20847L18.3009 4.00027C17.643 4.65815 17.2228 5.50663 17.0966 6.40237C15.7678 6.02167 14.7283 4.98222 14.3476 3.65339C15.2434 3.52718 16.0918 3.10699 16.7497 2.4491L17.5415 1.65726ZM6.55408 13.4209C7.08365 12.0525 7.99853 10.2517 9.50012 8.75014C11.0017 7.24854 12.8025 6.33366 14.1709 5.80409C14.286 5.94659 14.4078 6.08346 14.5371 6.21284C14.6665 6.34221 14.8034 6.46393 14.9459 6.57905C14.4164 7.94748 13.5015 9.74822 11.9999 11.2499C10.4983 12.7515 8.69751 13.6664 7.32908 14.1959C7.09884 13.9109 6.83908 13.6511 6.55408 13.4209ZM5.11615 9.75752C5.62076 8.63198 6.38881 7.53573 7.33728 6.58729C8.28575 5.63886 9.382 4.87077 10.5075 4.36616C11.409 3.96198 12.3123 3.73324 13.1489 3.69339C13.2363 4.07956 13.3658 4.4489 13.533 4.79636C12.0819 5.38085 10.236 6.35702 8.67149 7.92151C7.10697 9.48604 6.1308 11.3319 5.54631 12.7831C5.19885 12.6158 4.82952 12.4863 4.44335 12.3989C4.48323 11.5623 4.71198 10.659 5.11615 9.75752ZM3.95846 18.3427L2.40726 16.7915L3.19905 15.9997C3.85694 15.3418 4.27713 14.4934 4.40335 13.5977C5.73217 13.9784 6.77162 15.0178 7.15232 16.3466C6.25654 16.4729 5.40811 16.8931 4.75026 17.5509L3.95846 18.3427ZM8.35106 16.3066C8.26364 15.9205 8.13415 15.5511 7.96692 15.2037C9.41801 14.6192 11.2639 13.6431 12.8285 12.0785C14.393 10.514 15.3692 8.66807 15.9537 7.21694C16.3011 7.38417 16.6705 7.51366 17.0566 7.60112C17.0167 8.43772 16.788 9.34104 16.3838 10.2426C15.8792 11.3681 15.1112 12.4644 14.1627 13.4128C13.2142 14.3612 12.118 15.1293 10.9925 15.6339C10.091 16.0381 9.18766 16.2668 8.35106 16.3066Z" fill={bodyParts === 'Muscle' ? "#14B8A6" : '#5C6679'} />
            </Svg>
        )
    }

    const HandIcon = () => {
        return(
            <Svg width="23" height="29" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M22.4108 9.92914C22.4131 9.94559 22.4143 9.96219 22.4142 9.97881L22.4142 20.4784C22.4142 20.884 22.2983 21.281 22.08 21.6228C21.8617 21.9645 21.5502 22.2367 21.1822 22.4071C20.8143 22.5776 20.4052 22.6392 20.0034 22.5848C19.6015 22.5303 19.2237 22.3621 18.9143 22.0998L18.9143 24.4155C18.9145 24.8212 18.7985 25.2185 18.58 25.5603C18.3616 25.9022 18.0498 26.1743 17.6816 26.3446C17.3133 26.5148 16.904 26.5761 16.5021 26.5211C16.1002 26.4661 15.7224 26.2972 15.4134 26.0343L15.4145 26.6027C15.4033 27.1589 15.1745 27.6885 14.7772 28.0779C14.3799 28.4673 13.8457 28.6854 13.2895 28.6854C12.7332 28.6854 12.199 28.4673 11.8017 28.0779C11.4045 27.6885 11.1757 27.1589 11.1645 26.6027L11.1639 26.0141C10.839 26.3062 10.4292 26.4871 9.99438 26.5302C9.69915 26.5593 9.40109 26.5263 9.11938 26.4333C8.83768 26.3403 8.57856 26.1893 8.35871 25.9901C8.13886 25.7909 7.96314 25.5479 7.84286 25.2768C7.72258 25.0056 7.6604 24.7122 7.66033 24.4155L7.66059 15.525C7.6623 15.4265 7.70263 15.3327 7.77288 15.2636C7.84313 15.1946 7.93769 15.1559 8.03619 15.1559C8.13468 15.1559 8.22924 15.1946 8.29949 15.2636C8.36975 15.3327 8.41007 15.4265 8.41178 15.525L8.41178 24.4153C8.41175 24.6073 8.45194 24.7971 8.52976 24.9726C8.60757 25.1481 8.72128 25.3053 8.86357 25.4342C9.00586 25.5631 9.17356 25.6607 9.35588 25.7208C9.5382 25.781 9.73109 25.8022 9.92213 25.7832C10.2697 25.7365 10.5879 25.5633 10.816 25.2969C11.0441 25.0305 11.1662 24.6894 11.1589 24.3388L11.1605 15.2284C11.1603 15.1286 11.1998 15.0329 11.2703 14.9622C11.3407 14.8916 11.4363 14.8518 11.5361 14.8517C11.6358 14.8516 11.7315 14.8911 11.8022 14.9615C11.8728 15.0319 11.9126 15.1275 11.9127 15.2273L11.9146 26.6027C11.9201 26.9636 12.0673 27.3078 12.3245 27.561C12.5816 27.8142 12.928 27.9561 13.2889 27.9561C13.6498 27.9561 13.9962 27.8142 14.2534 27.561C14.5105 27.3078 14.6577 26.9636 14.6633 26.6027L14.6603 15.2284C14.6595 15.1785 14.6686 15.1289 14.687 15.0826C14.7055 15.0363 14.7331 14.9941 14.768 14.9585C14.803 14.923 14.8447 14.8947 14.8907 14.8754C14.9367 14.8561 14.9861 14.8462 15.0359 14.8462C15.0858 14.8462 15.1352 14.8561 15.1812 14.8754C15.2272 14.8947 15.2689 14.923 15.3039 14.9585C15.3388 14.9941 15.3664 15.0363 15.3848 15.0826C15.4033 15.1289 15.4124 15.1785 15.4115 15.2284L15.4115 24.3999C15.4118 24.4054 15.4147 24.41 15.4145 24.4155C15.4146 24.78 15.5594 25.1295 15.8172 25.3872C16.0749 25.6449 16.4243 25.7897 16.7888 25.7899C17.1507 25.7816 17.4955 25.6342 17.7515 25.3782C18.0074 25.1222 18.1549 24.7774 18.1631 24.4155L18.1597 15.2284C18.1614 15.1299 18.2017 15.036 18.272 14.967C18.3422 14.8979 18.4368 14.8592 18.5353 14.8592C18.6338 14.8592 18.7283 14.8979 18.7986 14.967C18.8688 15.036 18.9092 15.1299 18.9109 15.2284L18.9122 20.4636C18.9122 20.4689 18.9151 20.4734 18.9154 20.479C18.93 20.8335 19.0811 21.1687 19.3372 21.4144C19.5934 21.66 19.9346 21.797 20.2894 21.7967C20.6443 21.7965 20.9853 21.6589 21.241 21.4129C21.4968 21.1669 21.6474 20.8314 21.6614 20.4769L21.663 10.0277C21.6607 10.0113 21.6595 9.99481 21.6593 9.97828C21.6593 8.87857 21.4427 7.78963 21.0219 6.77364C20.6011 5.75764 19.9842 4.83448 19.2066 4.05687C18.429 3.27926 17.5059 2.66243 16.4899 2.2416C15.4739 1.82076 14.3849 1.60417 13.2852 1.60418L13.1365 1.60365C11.6563 1.60533 10.2029 1.9985 8.92383 2.74328C7.64472 3.48806 6.58537 4.55794 5.85328 5.84436L1.6139 13.3159C1.43194 13.6399 1.37927 14.0208 1.46646 14.382C1.55365 14.7433 1.77424 15.0582 2.08398 15.2636C2.39371 15.469 2.76966 15.5496 3.13637 15.4893C3.50308 15.429 3.83343 15.2323 4.06111 14.9386L7.73895 10.186C7.78692 10.124 7.8531 10.0785 7.9282 10.056C8.00331 10.0334 8.08359 10.035 8.15778 10.0604C8.23197 10.0858 8.29635 10.1337 8.34191 10.1976C8.38746 10.2614 8.41189 10.3379 8.41178 10.4163L8.41178 15.6539C8.41007 15.7524 8.36975 15.8462 8.2995 15.9153C8.22924 15.9843 8.13469 16.023 8.03619 16.023C7.93769 16.023 7.84313 15.9843 7.77288 15.9153C7.70263 15.8462 7.66231 15.7524 7.66059 15.6539L7.66059 11.5155L4.65531 15.3984C4.31149 15.8424 3.81236 16.1399 3.25821 16.2311C2.70405 16.3223 2.13592 16.2004 1.66795 15.8899C1.19998 15.5794 0.866837 15.1033 0.735451 14.5573C0.604064 14.0113 0.684167 13.4358 0.959667 12.9464L5.20091 5.47408C5.99814 4.07185 7.15238 2.90568 8.54633 2.09408C9.94028 1.28247 11.5242 0.854362 13.1373 0.853259L13.2857 0.853524C15.6973 0.853464 18.0109 1.80806 19.7207 3.50866C21.4306 5.20927 22.3977 7.5176 22.4108 9.92914Z" fill={bodyParts === 'Hand' ? "#14B8A6" : '#5C6679'} />
            </Svg>
        )
    }

    const FeetIcon = () => {
        return(
            <Svg width="14" height="28" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M13.2833 18.5108C13.2833 20.8315 12.7966 22.3865 12.7835 22.4257C12.4634 23.6773 12.5964 24.2587 12.7023 24.7263C12.7513 24.9424 12.798 25.1459 12.798 25.3778C12.798 26.1067 12.5096 26.8315 12.0261 27.3168C11.5679 27.776 10.971 28.0215 10.3167 27.9991C9.90001 27.986 9.51128 27.8623 9.19301 27.6411C8.90694 27.4433 8.66474 27.1521 8.48741 26.8072C8.19667 26.9957 7.82054 27.0811 7.39027 27.0429C6.83027 26.9901 6.33888 26.7661 6.00568 26.4124C5.82788 26.2215 5.69534 25.9905 5.61787 25.7441C5.60574 25.7427 5.59314 25.7413 5.58054 25.7399C5.01867 25.6699 4.48387 25.3199 4.14927 24.8029C4.03121 24.6195 3.93788 24.4169 3.86881 24.1967C3.75774 24.1911 3.64761 24.1752 3.54214 24.1481C2.98494 24.0109 2.49634 23.5979 2.23874 23.0491C2.11694 22.799 2.04041 22.5204 2.00914 22.2185C1.52147 22.0981 1.09121 21.7411 0.859742 21.2674C0.662808 20.8819 0.650208 20.4484 0.680075 20.0783C0.495275 19.8189 0.216675 19.2976 0.216675 18.5103C0.216675 16.7944 0.693608 15.7556 1.19854 14.6557C1.68947 13.5861 2.19721 12.4805 2.42821 10.5247C2.53087 9.66935 2.60367 8.66928 2.68114 7.61135C2.78334 6.22115 2.88834 4.78288 3.06661 3.69135C3.23554 2.65581 3.79041 1.71548 4.62668 1.04395C5.45921 0.371012 6.52227 1.33514e-05 7.61847 1.33514e-05C8.92841 1.33514e-05 10.1791 0.530613 11.0513 1.45508C11.8698 2.32308 12.2828 3.44215 12.2142 4.60601V4.60695C12.1531 5.60608 12.0747 6.17215 12.0056 6.67148C11.9099 7.36168 11.8269 7.95855 11.8269 9.53634C11.8269 11.3573 12.2072 12.8091 12.5754 14.2123C12.9231 15.5377 13.2833 16.9078 13.2833 18.5108ZM5.69207 24.8141C5.94781 24.8463 6.26001 24.7352 6.38694 24.5C6.52694 24.241 6.39161 23.9232 6.12934 23.8098C5.89227 23.7081 5.78261 23.4337 5.88434 23.1975C5.98421 22.9647 6.26374 22.8508 6.49708 22.9525C6.52927 22.9665 6.55541 22.9903 6.58621 23.0062L6.74394 22.7075C6.37761 22.5209 6.05794 22.2656 5.75134 21.994L5.47041 22.3622C5.47321 22.3739 5.47507 22.3855 5.47647 22.3963C5.57447 22.7925 5.49141 23.2279 5.25107 23.5681C5.12787 23.7356 4.96548 23.8719 4.78067 23.9778C4.82174 24.0945 4.87214 24.2023 4.93374 24.2975C5.11994 24.5849 5.40554 24.7781 5.69301 24.8141H5.69207ZM11.6729 14.4494C11.2897 12.9887 10.8935 11.4781 10.8935 9.53681C10.8935 7.89461 10.9808 7.26881 11.0807 6.54408C11.1479 6.06155 11.2239 5.51414 11.2827 4.55141C11.3355 3.64701 11.0125 2.77481 10.3723 2.09581C9.67601 1.35755 8.67174 0.933813 7.61847 0.933813C6.73461 0.933813 5.88061 1.23108 5.21234 1.77148C4.55481 2.29928 4.11988 3.03475 3.98828 3.84255C3.81654 4.89395 3.71247 6.31028 3.61214 7.68088C3.53747 8.70288 3.46001 9.75988 3.35501 10.6363C3.10674 12.7372 2.54347 13.9636 2.04647 15.0458C1.56534 16.0939 1.14954 16.9997 1.14954 18.5113C1.14954 19.2346 1.48228 19.5939 1.49114 19.6042C1.59381 19.7055 1.64327 19.8483 1.62647 19.9915C1.59614 20.2445 1.57001 20.608 1.69414 20.8516C1.80801 21.0849 2.01614 21.2623 2.25041 21.3183C2.43194 21.3617 2.68348 21.3141 2.79921 21.1549C2.92427 20.9869 2.84261 20.7629 2.66481 20.6743C2.43427 20.559 2.34094 20.2785 2.45621 20.048C2.56961 19.8212 2.85661 19.7269 3.08248 19.8394C3.41521 20.0055 3.66721 20.3149 3.75634 20.6649C3.84781 21.021 3.77081 21.4121 3.55101 21.7089C3.40307 21.9105 3.19214 22.0575 2.95041 22.1522C2.97234 22.3323 3.00967 22.5017 3.08061 22.6483C3.22014 22.946 3.48241 23.1737 3.76801 23.2437C4.01674 23.3049 4.33454 23.2391 4.49321 23.0225C4.66214 22.792 4.58514 22.4499 4.33781 22.3113C4.11287 22.1853 4.03307 21.9007 4.15907 21.6762C4.28321 21.455 4.57347 21.3733 4.79421 21.4975C4.83201 21.5189 4.86094 21.5516 4.89641 21.5759L5.07794 21.3383C4.89734 21.1475 4.72048 20.9552 4.54734 20.7634C4.37468 20.5721 4.38961 20.2771 4.58094 20.1045C4.67007 20.0237 4.78207 19.9841 4.89361 19.9841C5.02054 19.9841 5.14794 20.0359 5.23987 20.1381C5.76067 20.7153 6.29967 21.3127 6.92687 21.7387C7.12987 21.8769 7.42574 22.0113 7.76174 22.1177C8.00721 22.1951 8.14348 22.4579 8.06554 22.7033C8.00394 22.8979 7.82614 23.0193 7.63154 23.0239L7.26521 23.7179C7.27174 23.7333 7.27687 23.7482 7.28201 23.7631C7.43087 24.1463 7.40241 24.5901 7.20641 24.9471C7.06081 25.2173 6.82794 25.4245 6.54794 25.5635C6.58341 25.6405 6.62914 25.7138 6.68654 25.7749C6.92408 26.0279 7.28434 26.096 7.47334 26.1147C7.62454 26.1263 7.89801 26.1259 8.03381 25.9817C8.28861 25.7105 8.20181 25.2686 8.19527 24.9321C8.17987 24.178 8.31987 23.3632 8.58868 22.6375C8.67594 22.4019 8.95267 22.2735 9.18834 22.3622C9.43007 22.4513 9.55327 22.7206 9.46367 22.9619C9.23454 23.5802 9.11554 24.2732 9.12861 24.9125L9.13188 25.0362C9.13794 25.2467 9.14307 25.4655 9.11601 25.6928C9.19254 26.3713 9.59948 27.0447 10.3457 27.0671C10.7419 27.076 11.0909 26.9337 11.3653 26.6583C11.825 26.1973 11.9314 25.5463 11.7923 24.9345C11.6705 24.3992 11.5039 23.6651 11.8866 22.1695C11.8913 22.155 12.35 20.6771 12.35 18.5117C12.35 17.0291 12.0215 15.7766 11.6733 14.4503L11.6729 14.4494Z" fill={bodyParts === 'Feet' ? "#14B8A6" : '#5C6679'} />
            </Svg>
        )
    }

    const DentalIcon = () => {
        return(
            <Svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M10.3504 6.17024C12.6232 5.41301 13.8471 3.89856 13.8471 3.89856M13.8471 3.89856C13.8471 3.89856 15.0699 2.81194 15.6537 2.38411C19.4417 -0.392395 25.25 0.86965 25.25 7.43229C25.25 14.8886 19.6942 26.4572 17.4214 24.8485C14.2507 22.6043 16.4182 15.7618 13.3808 15.7618C10.3504 15.7618 12.1733 23.054 8.58266 24.8485C6.0573 26.1106 1.00663 12.4805 1.25912 6.17024C1.39576 2.75549 6.30988 -0.897197 10.8555 2.38414C12.704 3.7185 13.8471 3.89856 13.8471 3.89856Z" stroke={bodyParts === 'Dental' ? "#14B8A6" : '#5C6679'} stroke-linecap="round"/>
            </Svg>
        )
    }

    const NoseIcon = () => {
        return(
            <Svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M7.84676 22.0431C1.31312 24.448 -1.40187 17.9847 4.53776 14.3774C5.7259 10.1687 5.13192 8.96632 7.50767 4.15643C9.28979 -0.0521379 12.8537 -0.0521511 14.0415 4.15643C16.4176 8.96632 15.8236 10.1688 17.0114 14.3774C23.1127 17.8345 19.8607 24.4481 13.3267 22.0431M5.13192 20.3897C7.50767 19.7885 7.97151 23.8763 10.4777 23.9971C13.1798 24.1274 13.4477 19.7885 16.4176 20.3897" stroke={bodyParts === 'Nose' ? "#14B8A6" : '#5C6679'} stroke-linecap="round"/>
            </Svg>
        )
    }

    const SpineIcon = () => {
        return(
            <Svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M17.3557 7.2648C18.0505 6.8016 18.2565 5.876 17.8269 5.1616C17.5513 4.6916 17.0373 4.4 16.4857 4.4C16.1813 4.4 15.8825 4.4884 15.6185 4.6576C14.8045 5.1912 14.0245 5.61 13.2497 5.9384V4.2336C14.8625 3.73 16.0329 3.0408 16.6037 2.6608C17.2505 2.2292 17.4425 1.3688 17.0421 0.704C16.7813 0.2632 16.3161 0 15.7977 0C15.5117 0 15.2421 0.0784 14.9909 0.2372C11.0157 2.8412 7.4897 2.8448 3.5029 0.2336C3.2573 0.0784 2.9877 0 2.7017 0C2.1833 0 1.7181 0.2632 1.4589 0.7016C1.0569 1.3688 1.2489 2.2292 1.8961 2.6612C2.4665 3.0404 3.6369 3.73 5.2497 4.2336V5.938C4.4741 5.6092 3.6941 5.1904 2.8773 4.6552C2.6169 4.488 2.3181 4.3996 2.0137 4.3996C1.4621 4.3996 0.948502 4.6912 0.674502 5.1576C0.242902 5.876 0.448902 6.8012 1.1445 7.2652C2.4113 8.1056 3.6265 8.7044 4.8497 9.0896V10.9632C4.0181 10.576 3.3417 10.1584 2.8773 9.8556C2.6169 9.6884 2.3181 9.6 2.0137 9.6C1.4621 9.6 0.948502 9.8916 0.674502 10.358C0.242902 11.0764 0.448902 12.0016 1.1445 12.4656C2.4113 13.306 3.6265 13.9048 4.8497 14.29V16.1552C4.2013 15.8532 3.5457 15.4928 2.8773 15.056C2.6169 14.8888 2.3181 14.8004 2.0137 14.8004C1.4621 14.8004 0.948502 15.092 0.674502 15.5584C0.242902 16.2768 0.448902 17.202 1.1445 17.666C2.4113 18.5064 3.6265 19.1052 4.8497 19.4904V22.344C4.8497 22.8232 5.1285 23.2544 5.5601 23.4424C6.1461 23.6972 7.2617 24.0008 9.2497 24.0008C11.2377 24.0008 12.3533 23.6968 12.9393 23.4424C13.3709 23.2544 13.6497 22.8232 13.6497 22.344V19.4904C14.8729 19.1052 16.0881 18.5064 17.3549 17.666H17.3557C18.0505 17.2028 18.2565 16.2772 17.8269 15.5628C17.5513 15.0928 17.0373 14.8012 16.4857 14.8012C16.1813 14.8012 15.8825 14.8896 15.6189 15.0588C14.9521 15.4948 14.2977 15.8548 13.6497 16.1564V14.2912C14.8729 13.906 16.0885 13.3072 17.3557 12.4664C18.0505 12.0032 18.2565 11.0776 17.8269 10.3632C17.5513 9.8932 17.0373 9.6016 16.4857 9.6016C16.1813 9.6016 15.8825 9.69 15.6193 9.8588C15.1569 10.16 14.4813 10.5776 13.6497 10.9648V9.0912C14.8729 8.706 16.0885 8.1072 17.3557 7.2664V7.2648ZM2.3397 1.9952C2.0493 1.8016 1.9637 1.4144 2.1461 1.1112C2.3273 0.8048 2.7665 0.7148 3.0709 0.9064C5.1929 2.296 7.2137 2.9716 9.2501 2.9716C11.2865 2.9716 13.3077 2.296 15.4237 0.91C15.7437 0.708 16.1717 0.8036 16.3557 1.114C16.5365 1.4144 16.4505 1.8016 16.1609 1.9948C15.7053 2.2976 14.4605 3.0552 12.7393 3.5516C12.5681 3.6008 12.4501 3.758 12.4501 3.936V6.2408C10.2913 6.972 8.2061 6.9716 6.0501 6.2408V3.936C6.0501 3.758 5.9321 3.6008 5.7609 3.5516C4.0397 3.0556 2.7949 2.2976 2.3397 1.9952ZM1.5877 6.5992C1.2489 6.3736 1.1493 5.9216 1.3629 5.5664C1.5721 5.21 2.0821 5.0952 2.4429 5.3268C3.4961 6.0168 4.5001 6.534 5.5129 6.9076C8.0293 7.8264 10.4693 7.8268 12.9885 6.9076C13.9997 6.534 15.0037 6.0168 16.0533 5.3292C16.4237 5.0924 16.9269 5.208 17.1389 5.5708C17.3501 5.922 17.2505 6.374 16.9129 6.5992C16.4361 6.9156 14.9849 7.878 13.1393 8.408C12.9677 8.4572 12.8497 8.614 12.8497 8.7924V11.3008C10.4289 12.2244 8.0693 12.224 5.6497 11.3008V8.792C5.6497 8.6136 5.5317 8.4568 5.3601 8.4076C3.5149 7.8776 2.0637 6.9152 1.5873 6.5992H1.5877ZM16.0533 15.7288C16.4237 15.492 16.9269 15.608 17.1389 15.9704C17.3501 16.3216 17.2505 16.7736 16.9121 16.9992C16.4345 17.316 14.9841 18.278 13.1393 18.8076C12.9677 18.8568 12.8497 19.0136 12.8497 19.192V22.3428C12.8497 22.5036 12.7593 22.6468 12.6197 22.7076C12.1973 22.8916 11.1977 23.1996 9.2497 23.1996C7.3017 23.1996 6.3021 22.8912 5.8797 22.7076C5.7397 22.6468 5.6497 22.5036 5.6497 22.3428V19.192C5.6497 19.0136 5.5317 18.8568 5.3601 18.8076C3.5149 18.2776 2.0637 17.3152 1.5873 16.9992C1.2485 16.7736 1.1489 16.3216 1.3625 15.9664C1.4973 15.7372 1.7405 15.6 2.0137 15.6C2.1649 15.6 2.3141 15.6444 2.4429 15.7268C4.7821 17.2564 7.0085 18 9.2497 18C11.4909 18 13.7173 17.2568 16.0533 15.7288ZM16.0533 10.5288C16.4237 10.292 16.9269 10.408 17.1389 10.7704C17.3501 11.1216 17.2505 11.5736 16.9129 11.7988C16.4361 12.1152 14.9849 13.0776 13.1393 13.6076C12.9677 13.6568 12.8497 13.8136 12.8497 13.992V16.4948C11.6341 16.962 10.4413 17.2 9.2497 17.2C8.0581 17.2 6.8657 16.962 5.6497 16.4948V13.9924C5.6497 13.814 5.5317 13.6572 5.3601 13.608C3.5149 13.078 2.0637 12.1156 1.5873 11.7996C1.2485 11.574 1.1489 11.122 1.3625 10.7668C1.5717 10.4104 2.0809 10.2952 2.4433 10.5276C3.0317 10.9108 3.9465 11.4748 5.0989 11.9472C7.8825 13.0792 10.6161 13.0796 13.4013 11.9472C14.5529 11.4752 15.4677 10.9112 16.0533 10.5296V10.5288Z" fill={bodyParts === 'Spine' ? "#14B8A6" : '#5C6679'} />
            </Svg>
        )
    }

    return(
        <View className="border-[#151F311A] border border-solid w-full mt-5 rounded-[10px] overflow-hidden">
            <Pressable onPress={() => runOnUI(setHeight)()} activeOpacity={1}>
                <View className="flex-row items-center justify-between p-5">
                    <Text className="font-bold text-base leading-5 text-gray-dark">Body Parts</Text>
                    <Animated.View style={animatedChevronStyle}>
                        <FontAwesome name="angle-down" size={24} color="#1E293B" />
                    </Animated.View>
                </View>
            </Pressable>
            <Animated.View style={animatedHeightStyle}>
                <View className="absolute top-0 left-0 w-full border-t border-solid border-[#151F311A]">
                    <View className="p-5 flex-row flex-wrap justify-between" ref={animatedRef} onLayout={handleLayout}>
                        <RadioBox 
                            classname="mb-4 w-[22%]"
                            label="All" 
                            onPress={() => bodyPartsSelection('All')}
                            selectedRadio={bodyParts}
                            selectedRadioValue="All"
                            icon={<AllIcon />}
                            green="true"
                        />
                        <RadioBox 
                            classname="mb-4 w-[22%]"
                            label="Joint" 
                            onPress={() => bodyPartsSelection('Joint')}
                            selectedRadio={bodyParts}
                            selectedRadioValue="Joint"
                            icon={<JointIcon />}
                            green="true"
                        />
                        <RadioBox 
                            classname="mb-4 w-[22%]"
                            label="Muscle" 
                            onPress={() => bodyPartsSelection('Muscle')}
                            selectedRadio={bodyParts}
                            selectedRadioValue="Muscle"
                            icon={<MuscleIcon />}
                            green="true"
                        />
                        <RadioBox 
                            classname="mb-4 w-[22%]"
                            label="Hand" 
                            onPress={() => bodyPartsSelection('Hand')}
                            selectedRadio={bodyParts}
                            selectedRadioValue="Hand"
                            icon={<HandIcon />}
                            green="true"
                        />
                        <RadioBox 
                            classname="mb-4 w-[22%]"
                            label="Feet" 
                            onPress={() => bodyPartsSelection('Feet')}
                            selectedRadio={bodyParts}
                            selectedRadioValue="Feet"
                            icon={<FeetIcon />}
                            green="true"
                        />
                        <RadioBox 
                            classname="mb-4 w-[22%]"
                            label="Dental" 
                            onPress={() => bodyPartsSelection('Dental')}
                            selectedRadio={bodyParts}
                            selectedRadioValue="Dental"
                            icon={<DentalIcon />}
                            green="true"
                        />
                        <RadioBox 
                            classname="mb-4 w-[22%]"
                            label="Nose" 
                            onPress={() => bodyPartsSelection('Nose')}
                            selectedRadio={bodyParts}
                            selectedRadioValue="Nose"
                            icon={<NoseIcon />}
                            green="true"
                        />
                        <RadioBox 
                            classname="mb-4 w-[22%]"
                            label="Spine" 
                            onPress={() => bodyPartsSelection('Spine')}
                            selectedRadio={bodyParts}
                            selectedRadioValue="Spine"
                            icon={<SpineIcon />}
                            green="true"
                        />
                    </View>
                </View>
            </Animated.View>
        </View>
    )
}

export default BodyParts