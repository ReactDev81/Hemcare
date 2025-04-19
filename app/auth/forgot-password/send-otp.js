import { View, Text} from "react-native";
import { useRouter } from 'expo-router';
import { Formik } from "formik";
import * as Yup from 'yup';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Title from "components/ui/title";
import Input from "components/ui/form/input";
import FlatButton from "components/ui/FlatButton";
import useAxios from "hooks/useAxios";

const SendOtp = () => {

    const { loading, fetchData } = useAxios('/forgot-password/send-otp', 'post');

    const userSchema = Yup.object().shape({
        email: Yup.string()
            .email('Please enter a valid email')
            .required('Email is required'),
    });

    const router = useRouter();

    return (
        <View className="flex-1 items-center justify-center px-[30px] bg-white">
            <Title text="Forgot Password" />
            <Formik
                initialValues={{ email: '' }}
                validationSchema={userSchema}
                onSubmit={async (values, { resetForm }) => {
                    try {
                        const response = await fetchData({ data: {...values } });
                        if (response?.status === 200) {
                            await AsyncStorage.setItem('user_email', values.email);
                            Toast.show({
                                type: 'success',
                                text1: response.data?.message,
                            });
                            router.push('/auth/forgot-password/verify-otp');
                            resetForm();
                        }
                    } catch (err) {
                        Toast.show({
                            type: 'error',
                            text1: 'Login Failed',
                            text2: err.response?.data?.message || 'Something went wrong. Please try again.',
                        });
                    }
                }}
            >
                {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                    <View className="w-full mt-5">
                        <Input 
                            placeholder="Email Address"
                            value={values.email}
                            setValue={handleChange('email')}
                            onBlur={handleBlur('email')}
                        />
                        {errors.email && <Text className="pt-1.5 text-red-dark">{errors.email}</Text>}
                        <FlatButton onPress={handleSubmit} text={loading ? "Loading..." : "Submit Now"} classname="mt-10 bg-red-dark" />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default SendOtp