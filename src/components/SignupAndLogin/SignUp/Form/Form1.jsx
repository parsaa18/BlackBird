import { ErrorMessage, Field, Form, Formik } from "formik";
import { BounceLoader } from "react-spinners";
import { FaCheck } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { signupValidation } from "../../../../core/validation/signup";
import { RegisterApi } from "../../../../core/services/api/RegisterApi";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Form1 = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (result) => {
    setLoading(true);
    const register = await RegisterApi(result);
    console.log(register);
    register.success
      ? toast.success(register.message, { style: { borderRadius: "5px" } })
      : toast.error(register.message, { style: { borderRadius: "5px" } });
    setTimeout(() => {
      setLoading(false);

      register.success && navigate("Step2/" + result.phoneNumber);
    }, 2000);
  };

  return (
    <>
      <Toaster position="top-left" />
      <Formik
        initialValues={{ phoneNumber: "" }}
        validationSchema={signupValidation}
        onSubmit={(e) => {
          handleSignUp(e);
        }}
      >
        {(props) => {
          return (
            <Form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Field
                  placeholder="شماره همراه  خود را وارد کنید"
                  name="phoneNumber"
                  className={`px-5 py-3 text-sm transition-all duration-200 outline-none bg-transparent rounded-full border border-metricGray2 ${
                    props.errors.phoneNumber &&
                    "border-red-500 placeholder:text-red-500 "
                  } focus:border-metricGray3 focus:placeholder:text-metricGray3`}
                />
                <h2 className="mr-5 text-red-500 text-sm font-bold">
                  <ErrorMessage name="phoneNumber" />
                </h2>
              </div>

              <button
                type="submit"
                className="group text-white py-2 px-4  bg-metricBlack hover:bg-[#1C1D20]  rounded-full  flex items-center justify-center md:justify-start gap-14  transition-all duration-200 "
              >
                <div className="ml-2 w-8 h-8  items-center justify-center hidden md:flex">
                  <div
                    className={`  text-xl text-[#020202]  bg-white rounded-full w-2 h-2 flex items-center justify-center group-hover:w-8 group-hover:h-8 ${
                      loading && "w-8 h-8"
                    } transition-all duration-300`}
                  >
                    {loading ? (
                      <BounceLoader color="#000" size={20} />
                    ) : (
                      <FaCheck className="opacity-0 group-hover:opacity-100" />
                    )}
                  </div>
                </div>
                <div>تایید شماره همراه</div>
              </button>

              <div className="text-xs sm:text-sm flex items-center gap-1 w-full justify-center">
                <p>حساب کاربری دارید؟ </p>
                <NavLink
                  to={"/Login"}
                  className="underline underline-offset-[5px] font-semibold"
                >
                  ورود به حساب کاربری
                </NavLink>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Form1;
