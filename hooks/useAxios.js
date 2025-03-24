import { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import axiosInstance from '../api/axiosInstance';

const useAxios = (initialUrl = null, method = 'get', options = {}) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);
    const navigation = useNavigation();

    const fetchData = useCallback(
        async (requestData = {}) => {
            setLoading(true);
            setError(null);
            try {
                // Merges request-specific data with initialUrl and options.
                const response = await axiosInstance.request({
                    url: requestData.url || initialUrl,
                    method,
                    ...options,
                    ...requestData,
                });
                setData(response.data);
                setStatus(response.status);
                return response;
            } catch (err) {
                // Default error message if not provided by the server.
                const errorMessage = err.response?.data?.message || 'Something went wrong. Please try again.';
                const statusCode = err.response?.status || null;
                setStatus(statusCode);
                setError(errorMessage);

                // Handle specific status codes:
                if (statusCode === 401) {
                    navigation.navigate('auth/login');
                }
            } finally {
                setLoading(false);
            }
        },
        [initialUrl, method, options, navigation]
    );

    return { data, loading, error, status, fetchData };
};

export default useAxios;