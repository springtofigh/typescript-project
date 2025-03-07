import { Dispatch, FC, SetStateAction, useState } from "react";

interface IProps {
    setShowLoginModal: Dispatch<SetStateAction<Boolean>>
}

const LoginModal : FC<IProps> = ({ setShowLoginModal }) => {
        const [ username, setuserName ] = useState<string>("");
        const [ password, setPasword ] = useState<string>("");
    
        const ResetForm = (): void => {
            setuserName("");
            setPasword("");
        }
    
        // اگر داخل onSubmit‌ فرم بودیم میشد از event استفاده کرد
        const LoginHandler = () => {
            console.log(username, password);
            ResetForm();
            setShowLoginModal(false);
        }

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowLoginModal(false)}
                >
            </div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="mt-3 sm:flex">

                        <div className="mt-2 text-center sm:ml-4 sm:text-left">
                            <h4 className="text-lg font-medium text-gray-800">
                                Login To Account
                            </h4>
                            <div>
                                <div className=" items-center pt-6 sm:pt-0">
                                    <div className="p-3 mt-6 overflow-hidden bg-white shadow-md sm:rounded-lg">
                                        <form>
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
                                                onClick={LoginHandler}
                                            >
                                                Login
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

export default LoginModal