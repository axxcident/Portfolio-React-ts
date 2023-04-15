import React from "react";
import { Formik, FormikHelpers, FormikProps } from "formik";
import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactProps {
  bgTheme: boolean;
}

const ContactWrap = styled.div<{ bgTheme: boolean }>`
  width: 50%;
  height: 80%;
  background-color: #fdf9ff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .message-input textarea {
    width: 100%;
    height: 100px;
  }

  .form-input {
    display: flex;
    flex-direction: column;
  }
`;

const FormikSection: React.FC<ContactProps> = ({ bgTheme }) => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.name) {
      errors.name = "Name Required";
    }
    if (!values.email) {
      errors.email = "Email Required";
    } else if (
      !/^[A-Öa-ö0-9._%+-]+@[A-Öa-ö0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid Email Adress";
    }
    if (!values.subject) {
      errors.subject = "Subject Required";
    }
    if (!values.message) {
      errors.message = "Message Required";
    }
    return errors;
  };

  const onSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    emailjs
      .send(
        "service_k98ydbq",
        "template_liq6g4q",
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        "1_Y6PLIJJfIG5EoEz"
      )
      .then(
        () => {
          alert("Email sent successfully!");
          setSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred while sending the email.");
          setSubmitting(false);
        }
      );
    // Att göra: Email sending function here using the form values
    // Gammal function. konsol och alertar all info bara.
    // setTimeout(() => {
    //   console.log(values);
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
  };

  return (
    <>
      <ContactWrap bgTheme={true}>
        <h4>
          Send me an email <MdOutlineEmail />{" "}
        </h4>
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
              <div className="form-input namn-input">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && errors.name}
              </div>
              <div className="form-input email-input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </div>
              <div className="form-input email-subject">
                <label htmlFor="subject">Subject</label>
                <input
                  name="subject"
                  id="subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.subject}
                />
                {errors.subject && touched.subject && errors.subject}
              </div>
              <div className="form-input message-input">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
                {errors.message && touched.message && errors.message}
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !isValid || !dirty}
              >
                Send Email
              </button>
            </form>
          )}
        </Formik>
      </ContactWrap>
    </>
  );
};

export default FormikSection;
