import { useState } from "react";
import { TPostApiResponse } from "../types/public.types";

const BackEndURL = "http://localhost:3700"

export const useApiPost = (): TPostApiResponse => {
    const [status, setStatus] = useState<number>(0);
    const [statusText, setStatusText] = useState<string>("");
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    // جهت تمیز تر شدن کد موقع کار با useEffect
    const postAPIData = async (path: string, body: object = {}, options: RequestInit = {}) : Promise<void> => {
        setLoading(true)
        try {
            const fetchOptions: RequestInit = !options ? {
                method: "POST",
                headers: {'content-type': "application/json"},
                body: JSON.stringify(body),
                
            } : {
                ...options,
                method: "POST",
                headers: {'content-type': "application/json"},
                body: JSON.stringify(body),
            }

            // path مقدار / را داره خود
            fetch(`${BackEndURL}${path}` , fetchOptions)
            .then(async (res) => {
                setStatus(res.status);
                setStatusText(res.statusText);
                setData(await res.json())
            }).catch(err => setError(err))
        } catch (error) {
            setError(error);
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