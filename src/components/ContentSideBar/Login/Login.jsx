import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

function Login() {
  const [isPasswordType, setIsPasswordType] = useState(true);
  const typeOfPasswordInput = (isPasswordType ? "password" : "text");

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required')
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  })
  const handleShowHidePassword = () => {
    setIsPasswordType(!isPasswordType);
  };

  return (
    <div className="pl-8 pt-8 pr-6">
      <div className="text-[20px] text-center mb-5 font-Karla">SIGN IN</div>

      <form onSubmit={formik.handleSubmit}>
        {/* email input */}
        <div>
          <p className="text-[15px] text-gray-700 mb-1">Username or email *</p>
          <input className="w-full rounded-sm border-2 border-gray-300 outline-1 px-2 py-1" type="text"
            id="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {
            formik.errors.email && formik.touched.email
            && (<div className="text-red-600 text-[14px]">{formik.errors.email}</div>)
          }
        </div>


        {/* Passowrd Input*/}
        <div className="mt-4">
          <p className="text-[15px] text-gray-700 mb-1">Password *</p>
          <div className="relative">
            <input className="w-full rounded-sm border-2 border-gray-300 outline-1 px-2 py-1"
              id="password"
              type={typeOfPasswordInput}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {
              formik.errors.password && formik.touched.password
              && (<div className="text-red-600 text-[14px]">{formik.errors.password}</div>)
            }
            <div onClick={handleShowHidePassword} className="absolute top-3 right-2">
              {
                isPasswordType ? <IoEyeOutline /> : <FaRegEyeSlash />
              }
            </div>
          </div>
        </div>

        {/* Remember me */}
        <div className="flex justify-start items-center mt-3">
          <input className="mr-3" type="checkbox" />
          <span className="text-[14px]">Remember me</span>
        </div>

        <button type="submit" className="w-full text-center text-white bg-black hover:bg-gray-900 mt-3 rounded-md py-1">Login</button>
      </form>

      <p className="mt-5 text-center font-[14px] hover:underline cursor-pointer">Lost your password</p>
    </div>

  )
}

export default Login