import { ErrorMessage, Field, Form, Formik } from "formik";
import { BounceLoader } from "react-spinners";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { VerifyMessageValid } from "../../../../core/validation/signup";
import { VerifyCodeApi } from "../../../../core/services/api/RegisterApi";
import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Form2 = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const handleVerify = async (result) => {
    const obj = { ...params, ...result };
    setLoading(true);
    const verify = await VerifyCodeApi(obj);
    verify.success
      ? toast.success(verify.message, { style: { borderRadius: "5px" } })
      : toast.error(verify.message, { style: { borderRadius: "5px" } });
    setTimeout(() => {
      setLoading(false);

      verify.success && navigate("/Signup/Step3/" + params.phoneNumber);
    }, 2000);
  };

  return (
    <>
      <Toaster position="top-left" />
      <Formik
        initialValues={{ verifyCode: "" }}
        validationSchema={VerifyMessageValid}
        onSubmit={(e) => {
          handleVerify(e);
        }}
      >
        {(props) => {
          return (
            <Form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Field
                  placeholder="کد تایید را وارد کنید"
                  name="verifyCode"
                  className={`px-5 py-3 text-sm transition-all duration-200 outline-none bg-transparent rounded-full border border-metricGray2 ${
                    props.errors.verifyCode &&
                    "border-red-500 placeholder:text-red-500 "
                  } focus:border-metricGray3 focus:placeholder:text-metricGray3`}
                />
                <h2 className="mr-5 text-red-500 text-sm font-bold">
                  <ErrorMessage name="verifyCode" />
                </h2>
              </div>

              <button
                type="submit"
                className="group text-white py-3 px-4  bg-metricBlack hover:bg-[#1C1D20]  rounded-full  flex items-center justify-center  md:justify-start gap-14  transition-all duration-200 "
              >
                <div className="ml-2 w-8 h-8 hidden md:flex items-center justify-center ">
                  <div
                    className={`  text-xl text-[#1C1D20]  bg-white rounded-full w-2 h-2 flex items-center justify-center group-hover:w-8 group-hover:h-8 ${
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

              <NavLink
                to={"/Signup"}
                className="flex items-center gap-4 w-full justify-center text-2xl"
              >
                <FaArrowRight />
                <p>بازگشت</p>
              </NavLink>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Form2;
