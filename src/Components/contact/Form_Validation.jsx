import { useFormik } from "formik";
import signupschema from "../../schema/index";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
const Form_Validation = () => {
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupschema,
      onSubmit: (value, action) => {
        console.log(value);
        action.resetForm();
      },
    });
  return (
    <>
      <div className="p-2 max-w-[425px] m-auto mb-10">
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
          Register to Web-App
        </h2>
        <form action="#" method="POST" className="mt-8" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="text-base font-medium text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm
                   placeholder:text-gray-400 "
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="off"
                  placeholder="Full Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.name && touched.name ? (
                  <p className="text-xs font-semibold font-mono text-red-700">
                    {errors.name}
                  </p>
                ) : null}
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-base font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm
                   placeholder:text-gray-400 "
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.email && touched.email ? (
                  <p className="text-xs text-red-700 font-semibold font-mono">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-base font-medium text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm
                   placeholder:text-gray-400 "
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="off"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.password && touched.password ? (
                  <p className="text-xs text-red-700 font-semibold font-mono">
                    {errors.password}
                  </p>
                ) : null}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="Confirm_password"
                  className="text-base font-medium text-gray-900"
                >
                  Confirm_Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm
                   placeholder:text-gray-400 "
                  type="password"
                  id="Confirm_password"
                  name="confirm_password"
                  autoComplete="off"
                  placeholder="Password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.confirm_password && touched.confirm_password ? (
                  <p className="text-xs text-red-700 font-semibold font-mono">
                    {errors.confirm_password}
                  </p>
                ) : null}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 
                font-semibold leading-7 text-white hover:bg-black/80"
              >
                Register Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form_Validation;
