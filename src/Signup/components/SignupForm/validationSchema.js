import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Minimum of 8 characters")
    .max(16, "Maximum of 16 characters")
    .oneOf([yup.ref("passwordConfirm"), null], "Passwords must match")
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    .min(8, "Password confirmation must be at least 8 character")
    .max(16, "Password confirmation must be at most 16 characters")
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required")
});

export default validationSchema;
