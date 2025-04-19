import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import FlatButton from 'components/ui/FlatButton';
import useAxios from 'hooks/useAxios';


const VerifyOtp = () => {

    const router = useRouter();
    const { data, fetchData, loading } = useAxios('/forgot-password/verify-otp', 'post');

    const [email, setEmail] = useState('');
    const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
    const [isExpired, setIsExpired] = useState(false);
    const inputRefs = useRef([]);

    const OtpSchema = Yup.object().shape({
        otp: Yup.array()
        .required()
        .test('empty-check', 'Field is required', (value) => {
            return value && value.join('').trim().length > 0;
        })
        .test('length-check', 'OTP must be 6 digits', (value) => {
            return value && value.join('').length === 6;
        }),
    });

    useEffect(() => {
        (async () => {
            const storedEmail = await AsyncStorage.getItem('user_email');
            if (storedEmail) setEmail(storedEmail);
        })();

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setIsExpired(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleOtpChange = (index, value, setFieldValue) => {
        if (value.length > 1) value = value.slice(-1);
        setFieldValue(`otp[${index}]`, value);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (e, index, values, setFieldValue) => {
        if (e.nativeEvent.key === 'Backspace' && !values.otp[index] && index > 0) {
            setFieldValue(`otp[${index - 1}]`, '');
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleResend = () => {
        Toast.show({ type: 'info', text1: 'OTP resent (simulated)' });
        setTimeLeft(900);
        setIsExpired(false);
    };

    return (
        <View className="flex-1 items-center justify-center px-[30px] bg-white">
            <Text className="text-xl font-bold mb-2">Verify OTP</Text>
            <Text className="mb-2 text-gray-600">Enter the 6-digit code sent to your email</Text>

            <Text className="text-orange-500 font-medium mb-4">
                Time remaining: {formatTime()}
            </Text>

            <Formik
                initialValues={{ otp: ['', '', '', '', '', ''] }}
                validationSchema={OtpSchema}
                onSubmit={async (values) => {
                    const otp = values.otp.join('');
                    try {
                        const res = await fetchData({ data: { email: email, otp: otp } });
                        if (res?.status === 200) {
                            await AsyncStorage.setItem('reset_token', values.reset_token);
                            Toast.show({ type: 'success', text1: res.data.message || 'OTP Verified!' });
                            await AsyncStorage.removeItem('user_email', values.email);
                            router.push('/auth/forgot-password/reset-password');
                        }
                    } catch (err) {
                        Toast.show({
                            type: 'error',
                            text1: 'Verification Failed',
                            text2: err?.response?.data?.message || 'Invalid OTP',
                        });
                    }
                }}
            >
                {({ handleSubmit, values, errors, setFieldValue }) => (
                    <View className="w-full items-center">
                        <View className="flex-row justify-center space-x-2 my-4">
                            {values.otp.map((val, index) => (
                                <TextInput
                                    key={index}
                                    ref={(ref) => (inputRefs.current[index] = ref)}
                                    className="w-12 h-12 border-gray-300 bg-gray-100 text-lg text-center rounded-md mx-1 border"
                                    keyboardType="number-pad"
                                    maxLength={1}
                                    value={val}
                                    onChangeText={(value) => handleOtpChange(index, value, setFieldValue)}
                                    onKeyPress={(e) => handleKeyPress(e, index, values, setFieldValue)}
                                    editable={!isExpired}
                                />
                            ))}
                        </View>

                        {errors.otp && typeof errors.otp === 'string' && (
                            <Text className="pt-1.5 text-red-dark">{errors.otp}</Text>
                        )}

                        <FlatButton
                            onPress={handleSubmit}
                            text={loading ? 'Verifying...' : 'Verify'}
                            disabled={isExpired}
                            classname="w-full mt-4 bg-red-dark"
                        />

                        <FlatButton
                            onPress={() => {
                                handleResend();
                                handleSubmit();
                            }}
                            text="Resend Code"
                            disabled={!isExpired}
                            classname="w-full mt-2 bg-gray-400"
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default VerifyOtp;