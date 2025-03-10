import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useApiPost } from "../functions/FetchAPI";

interface IProps {
    setShowRegisterModal: Dispatch<SetStateAction<Boolean>>
}

const RgisterModal : FC<IProps> = ({ setShowRegisterModal }) => {
    const [ fullname, setFullname ] = useState<string>("");
    const [ username, setuserName ] = useState<string>("");
    const [ password, setPasword ] = useState<string>("");
    const { data, postAPIData } = useApiPost();


    const ResetForm = (): void => {
        setFullname("");
        setuserName("");
        setPasword("");
    }

    // اگر داخل onSubmit‌ فرم بودیم میشد از event استفاده کرد
    const RegisterHandler = () => {
        postAPIData("/auth/register", { username, password, fullname });
        // setShowRegisterModal(false);
    }

         //جهت حل مشکل همگام نبودن نمایش دیتاها در کنسول
         useEffect(() => {
            if (data) {
            console.log(data);
            alert('ثبت نام شما با موفقیت انجام شد');
            ResetForm();
            }
        }, [data])


    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowRegisterModal(false)}
                >
            </div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="mt-3 sm:flex">
                        <div className="mt-2 text-center sm:ml-4 sm:text-left">
                            <h4 className="text-lg font-medium text-gray-800">
                                Signup To Account
                            </h4>
                            <div>
                                <div className=" items-center pt-6 sm:pt-0">
                                    <div className="p-3 mt-6 overflow-hidden bg-white shadow-md sm:rounded-lg">
                                        <form>
                                        <div className="mt-4">
                                                <div className="flex flex-col items-start">
                                                    <input type="text" name="fullname" placeholder="Fullname"
                                                        value={fullname}
                                                        onChange={(e) => setFullname(e.target.value)}
                                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <div className="flex flex-col items-start">
                                                    <input type="text" name="username" placeholder="Username"
                                                        value={username}
                                                        onChange={(e) => setuserName(e.target.value)}
                                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <div className="flex flex-col items-start">
                                                    <input type="password" name="password" placeholder="Password"
                                                        value={password}
                                                        onChange={(e) => setPasword(e.target.value)}
                                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                        <div className="items-center gap-2 mt-3 sm:flex">
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-white bg-green-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                onClick={RegisterHandler}
                                            >
                                                Signup
                                            </button>
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                                
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RgisterModal;