import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

function Login() {
  const [isPasswordType, setIsPasswordType] = useState(true);
  const typeOfPasswordInput = (isPasswordType ? "password" : "text");

  const handleShowHidePassword = () => {
    setIsPasswordType(!isPasswordType);
  };

  return (
    <div className="pl-8 pt-8 pr-6">
      <div className="text-[20px] text-center mb-5 font-Karla">SIGN IN</div>
      <div>
        <p className="text-[14px] text-gray-700 mb-1">Username or email *</p>
        <input className="w-full rounded-sm border-2 border-gray-300 outline-1 px-2 py-1" type="text" />
      </div>

      {/* Passowrd Input*/}
      <div className="mt-4">
        <p className="text-[14px] text-gray-700 mb-1">Password *</p>
        <div className="relative">
          <input className="w-full rounded-sm border-2 border-gray-300 outline-1 px-2 py-1" type={typeOfPasswordInput} />
          <div onClick={handleShowHidePassword} className="absolute top-3 right-2">
            {
              isPasswordType ? <IoEyeOutline /> : <FaRegEyeSlash />
            }
          </div>
        </div>

        {/* Remember me */}
        <div className="flex justify-start items-center mt-3">
          <input className="mr-3" type="checkbox" />
          <span className="text-[14px]">Remember me</span>
        </div>

        <button className="w-full text-center text-white bg-black hover:bg-gray-900 mt-3 rounded-md py-1">Login</button>
        <p className="mt-5 text-center font-[14px] hover:underline cursor-pointer">Lost your password</p>
      </div>
    </div>
  )
}

export default Login