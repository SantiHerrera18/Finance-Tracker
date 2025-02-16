import { Formik } from "formik";
import { validateLogin } from "../../helpers/loginValidation";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={validateLogin}
      onSubmit={() => {}}
    ></Formik>
  );
};

export default LoginForm;
