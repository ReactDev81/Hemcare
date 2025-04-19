import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import Title from "components/ui/title";
import PasswordInput from "components/ui/form/password-input";
import FlatButton from 'components/ui/FlatButton';
import useAxios from 'hooks/useAxios';

const ResetPassword = () => {

    const { loading, fetchData } = useAxios('/forgot-password/reset-password', 'post');
    const [ token, setToken ]= useState();

    const userSchema = Yup.object().shape({
        new_password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        new_password_confirmation: Yup.string()
            .required('Confirm password is required')
            .oneOf([Yup.ref('new_password'), null], 'Passwords must match')
    });

    const router = useRouter();

    useEffect(() => {
        (async () => {
            const storedToken = await AsyncStorage.getItem('reset_token');
            if (storedToken) setToken(storedEmail);
        })();
    }, []);

    console.log('token', token)

    return (
        <View className="flex-1 items-center justify-center px-[30px] bg-white">
            <Title text="Set New Password" />
            <Formik
                initialValues={{ new_password: '', new_password_confirmation: '' }}
                validationSchema={userSchema}
                onSubmit={async (values, { resetForm }) => {
                    try {
                        const response = await fetchData({ data: {...values, token: token } });
                        if (response?.status === 200) {
                            Toast.show({
                                type: 'success',
                                text1: response.data?.message,
                            });
                            router.push('/auth/login');
                            resetForm();
                        }
                    } catch (err) {
                        Toast.show({
                            type: 'error',
                            text1: err.response?.data?.message || 'Something went wrong. Please try again.',
                        });
                    }
                }}
            >
                {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                    <View className="w-full mt-5">
                        <PasswordInput 
                            value={values.password} 
                            setValue={handleChange('new_password')}
                            onBlur={handleBlur('new_password')}
                        />
                        {errors.new_password && <Text className="pt-1.5 text-red-dark">{errors.new_password}</Text>}
                        <PasswordInput 
                            placeholder="Confirm Password" 
                            value={values.password} 
                            setValue={handleChange('new_password_confirmation')}
                            onBlur={handleBlur('new_password_confirmation')}
                        />
                        {errors.new_password_confirmation && <Text className="pt-1.5 text-red-dark">{errors.new_password_confirmation}</Text>}
                        <FlatButton onPress={handleSubmit} text={loading ? "Loading..." : "Submit Now"} classname="mt-10 bg-red-dark" />
                    </View>
                )}
            </Formik>
        </View>
    )
}
export default ResetPassword