import { useState, useEffect } from "react";
import { AxiosResponse, instance, RawAxiosRequestHeaders} from '../services/axios/axios';
import { AxiosError } from "axios";


const useFetch : (url:string, []) => void = (url) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response: AxiosResponse = await instance.get(url);
                setData(response.data);
                
            } catch (err:AxiosError | any) {
                setError(err.response ? err?.response?.data?.message: "Fetch error" )
                
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return {
        data, 
        loading,
        error
    }
} 
export default useEffect;

