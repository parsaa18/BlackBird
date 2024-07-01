import * as yup from "yup";

export const DescribeTicket = yup.object().shape({
  SelectIssue: yup
  .string()
  .required("یکی از موضوعات رو انتخاب کنید")
  ,
  Title: yup
    .string()
    .required("موضوع خالیست")
    .min(5,"باید بیشتر از 5 کاراکتر باشد"),
  Describe: yup
    .string()
    .required("توضیحات خالیست")
    .min(50,"باید بیشتر از 50 کاراکتر باشد"),
});