export type TApiResponse = {
    status: number;
    statusText:string;
    // میتونه آرایه باشه ،ابجت باشه و...
    data:any;
    //میتونه null باشه یا undefinde یا متن یا آبجکت
    error:any;
    loading:boolean;
}

export type TPostApiResponse = TApiResponse & {
    postAPIData: Function;
}

export type TGetApiResponse = TApiResponse & {
    getAPIData: Function;
}