import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password is minimum of 8")
    .max(16, "Password is maximum of 16")
    .required("Password is required")
});

export default validationSchema;
