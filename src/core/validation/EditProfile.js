import * as yup from "yup";

export const EditProfileValidation = yup.object().shape({
  email: yup
    .string()
    .required("لطفا ایمیل خود را وارد کنید")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "ایمیل خود را درست وارد کنید"
    ),
  fName: yup.string().required("لطفا نام خود را وارد کنید"),
  lName: yup.string().required("لطفا نام خود را وارد کنید"),
  // birthDay: yup.string().required("لطفا تاریخ تولد خود را وارد کنید"),
  phoneNumber: yup
    .string()
    .required("لطفا شماره خود را وارد کنید")
    .matches(/^(?:(?:\+|00)98|0)?9\d{9}$/, "شماره خود را درست وارد کنید"),
  nationalCode: yup.string().required("لطفا کد ملی خود را وارد کنید"),
  homeAddress: yup.string().required("لطفا  آدرس خود را وارد کنید"),
  userAbout: yup.string().required("لطفا  اطلاعات شخصی خود را وارد کنید"),
});
