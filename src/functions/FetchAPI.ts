import { useState } from "react";
import { TPostApiResponse, TGetApiResponse } from "../types/public.types";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

const BackEndURL = "http://localhost:3700"

export const useApiPost = (): TPostApiResponse => {
    const [status, setStatus] = useState<number>(0);
    const [statusText, setStatusText] = useState<string>("");
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    // جهت تمیز تر شدن کد موقع کار با useEffect
    const postAPIData = async (path: string, body: object = {}, options: AxiosRequestConfig = {}) : Promise<void> => {
        setLoading(true)
        try {
            // path مقدار / را داره خود
            const axiosResponse = await axios.post(`${BackEndURL}${path}`, body, options)
            setStatusText(axiosResponse.statusText);
            setData(await axiosResponse.data);
            setStatus(axiosResponse.status || data.status );
        } catch (err: AxiosError | any) {
            setStatus(err?.response?.data?.status || 500);
            setError(err?.response?.data);
            console.log(error)
            return alert(status + " - " + error?.message || err?.message)
        }
        setLoading(false);
    }

    // تمام این موارد باید return بشن
    return {
        postAPIData,
        status,
        statusText,
        data,
        error,
        loading,
    }
}

export const useApiGet = (): TGetApiResponse => {
    const [status, setStatus] = useState<number>(0);
    const [statusText, setStatusText] = useState<string>("");
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const getAPIData = async (path: string, options: AxiosRequestConfig = {}) : Promise<void> => {
        setLoading(true)
        try {
            const axiosResponse = await axios.get(`${BackEndURL}${path}`, options)
            setStatusText(axiosResponse.statusText);
            setData(await axiosResponse.data);
            setStatus(axiosResponse.status || data.status );
        } catch (err: AxiosError | any) {
            setStatus(err?.response?.data?.status || 500);
            setError(err?.response?.data);
            console.log(error)
            return alert(status + " - " + error?.message || err?.message)
        }
        setLoading(false);
    }

    // تمام این موارد باید return بشن
    return {
        getAPIData,
        status,
        statusText,
        data,
        error,
        loading,
    }
}

export const useApiDelete = (): [Function] => {
    const [status, setStatus] = useState<number>(0);
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();

    const getAPIDelete = async (path: string, options: AxiosRequestConfig = {}) : Promise<void> => {
        try {
            const axiosResponse = await axios.delete(`${BackEndURL}${path}`, options)
            setData(await axiosResponse.data);
            setStatus(axiosResponse.status || data.status );
        } catch (err: AxiosError | any) {
            setStatus(err?.response?.data?.status || 500);
            setError(err?.response?.data);
            console.log(error)
            return alert(status + " - " + error?.message || err?.message)
        }
    }

    return [getAPIDelete];
}