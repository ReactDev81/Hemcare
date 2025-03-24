import { View, Text} from "react-native";
import { Link, useRouter} from "expo-router";
import Toast from 'react-native-toast-message';
import { Formik } from "formik";
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import useAxios from "hooks/useAxios";
import Input from "../../components/ui/form/input";
import PasswordInput from "../../components/ui/form/password-input";
import Title from "../../components/ui/title";
import FlatButton from "../../components/ui/FlatButton";

const Login = () => {

    const { loading, fetchData } = useAxios('/login', 'post');

    const router = useRouter();

    const userSchema = Yup.object().shape({
        email: Yup.string()
            .email('Please enter a valid email')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
    });

    return(
        <View className="flex-1 items-center justify-center px-[30px] bg-white">
            <Title text="Login" />
            <Text className="mt-3.5 text-[#1D4A7A] text-sm">Create an account ? <Link className="text-[#C41B33]" href="auth/register">Sign up</Link></Text>

            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={userSchema}
                onSubmit={async (values, { resetForm }) => {
                    try {
                        const response = await fetchData({ data: {...values, remember: 0 } });
                        if (response.data.token) {
                            await AsyncStorage.setItem('userData', JSON.stringify(response.data));
                        }
                        Toast.show({
                            type: 'success',
                            text1: '👋 Hi ' + response.data.user.name,
                            text2: 'You have logged in successfully',
                        });
                        router.push('/(drawer)');
                        resetForm();
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
                        <PasswordInput 
                            value={values.password} 
                            setValue={handleChange('password')}
                            onBlur={handleBlur('password')}
                        />
                        {errors.password && <Text className="pt-1.5 text-red-dark">{errors.password}</Text>}
                        <Link href="/(drawer)" className="text-right text-xs text-red-dark mt-2.5">Forgot Password</Link>
                        <FlatButton onPress={handleSubmit} text={loading ? "Loading..." : "Login"} classname="mt-10 bg-red-dark" />
                    </View>
                )}
            </Formik>

            {/* spreator */}
            <View className="max-w-[300px] w-full mt-10 relative flex justify-center items-center">
                <View className="bg-[#E0E5EB] h-[2px] w-full absolute"></View>
                <Text className="text-blue-dark tracking-[0.3px] text-xs h-[18px] w-[98px] bg-white text-center">or sign up with</Text>
            </View>

            {/* social media login */}
            <View className="flex justify-between items-center flex-row gap-x-[26px] mt-8">
                <View className="flex-1 border border-solid border-[#E0E5EB] rounded-[10px] p-3.5 flex items-center justify-center">
                    <AntDesign name="google" size={24} color="#DB4437" />
                </View>
                <View className="flex-1 border border-solid border-[#E0E5EB] rounded-[10px] p-3.5 flex items-center justify-center">
                    <AntDesign name="apple1" size={24} color="#000000" />
                </View>
                <View className="flex-1 border border-solid border-[#E0E5EB] rounded-[10px] p-3.5 flex items-center justify-center">
                    <FontAwesome5 name="facebook-f" size={24} color="#4267B2" />
                </View>
            </View>

        </View>
    )
}

export default Login