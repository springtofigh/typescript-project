import { useState } from "react";

type TApiResponse = {
    status: number;
    statusText:string;
    // میتونه آرایه باشه ،ابجت باشه و...
    data:any;
    //میتونه متن باشه یا آیجت
    error:any;
    loading:boolean;
}


const useApiPost = (url: string): TApiResponse => {
    const [status, setStatus] = useState<number>(0);
    const [statusText, setStatusText] = useState<string>("");
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    //جهت تمیز تر شدن کد موقع کار با useEffect
    const postAPIData = async () => {
        try {
            
        } catch (error) {
            
        }
    }
}