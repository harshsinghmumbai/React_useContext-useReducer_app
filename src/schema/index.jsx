import * as Yup from "yup";
//yup is schema {} base validation type

const signupschema = Yup.object({
  name: Yup.string().min(3).max(25).required("Please enter your Name"),
  email: Yup.string().email().required("Please enter your Name"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

export default signupschema;
