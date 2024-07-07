import * as yup from "yup";

export const joinCourseSchema = yup
  .object({
    name: yup.string().required("Name is required"),
    age: yup
      .number()
      .typeError("Age must be a number")
      .positive("Age must be a positive number")
      .integer("Age must be an integer")
      .required("Age is required")
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value
      ),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    whatsapp: yup
      .string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Invalid Whatsapp number"
      )
      .required("WhatsApp number is required"),
    gender: yup
      .string()
      .oneOf(["female", "male", "other"], "Select a valid gender")
      .required("Gender is required"),
    education: yup.string().required("Education is required"),
    occupation: yup.string().required("Occupation is required"),
    language: yup.string().required("Language is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
  })
  .required();

export const contactSchema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    message: yup.string().required("Message is required"),
  })
  .required();
