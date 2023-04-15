import React from "react";
import { Formik, FormikHelpers, FormikProps } from "formik";

interface FormValues {
  email: string;
  password: string;
}

const FormikSection: React.FC = () => {
  const initialValues: FormValues = { email: "", password: "" };

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Öa-ö0-9._%+-]+@[A-Öa-ö0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid Email Adress";
    }
    return errors;
  };

  const onSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
      <h2>Formik exempel nedan</h2>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
          dirty,
        }: FormikProps<FormValues>) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting || !isValid || !dirty}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FormikSection;
