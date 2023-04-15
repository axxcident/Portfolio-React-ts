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
  nameClass: string;
  emailClass: string;
  subjectClass: string;
  messageClass: string;
}

interface ContactProps {
  bgTheme: boolean;
}

const ContactWrap = styled.div<{ bgTheme: boolean }>`
  width: 50%;
  height: 80%;
  background-color: ${({ bgTheme }) => (bgTheme ? "#393939" : "#fdf9ff")};
  /* background-color: var(--text-black-900); */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ bgTheme }) => (bgTheme ? "white" : "#222222")};

  h4 {
    margin-bottom: 10px;
  }

  .error {
    color: #ec1839;
    font-size: 0.8rem;
  }

  form * {
    margin-bottom: 4px;
  }

  .message-input textarea {
    width: 100%;
    height: 100px;
  }

  .form-input {
    display: flex;
    flex-direction: column;
  }

  /* .form-input label {
    color: ${({ bgTheme }) => (bgTheme ? "#222222" : "white")};
  } */
`;

const FormikSection: React.FC<ContactProps> = ({ bgTheme }) => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
    nameClass: "",
    emailClass: "",
    subjectClass: "",
    messageClass: "",
  };

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.name) {
      errors.name = "Name Required";
      errors.nameClass = "error";
    }
    if (!values.email) {
      errors.email = "Email Required";
      errors.emailClass = "error";
    } else if (
      !/^[A-Öa-ö0-9._%+-]+@[A-Öa-ö0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid Email Adress";
    }
    if (!values.subject) {
      errors.subject = "Subject Required";
      errors.subjectClass = "error";
    }
    if (!values.message) {
      errors.message = "Message Required";
      errors.messageClass = "error";
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
  };

  return (
    <>
      {bgTheme ? (
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
                  {errors.name && touched.name && (
                    <span className={errors.nameClass}>{errors.name}</span>
                  )}
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
                  {errors.email && touched.email && (
                    <span className={errors.emailClass}>{errors.email}</span>
                  )}
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
                  {errors.subject && touched.subject && (
                    <span className={errors.subjectClass}>
                      {errors.subject}
                    </span>
                  )}
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
                  {errors.message && touched.message && (
                    <span className={errors.messageClass}>
                      {errors.message}
                    </span>
                  )}
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
      ) : (
        <ContactWrap bgTheme={false}>
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
                  {errors.name && touched.name && (
                    <span className={errors.nameClass}>{errors.name}</span>
                  )}
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
                  {errors.email && touched.email && (
                    <span className={errors.emailClass}>{errors.email}</span>
                  )}
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
                  {errors.subject && touched.subject && (
                    <span className={errors.subjectClass}>
                      {errors.subject}
                    </span>
                  )}
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
                  {errors.message && touched.message && (
                    <span className={errors.messageClass}>
                      {errors.message}
                    </span>
                  )}
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
      )}
    </>
  );
};

export default FormikSection;
