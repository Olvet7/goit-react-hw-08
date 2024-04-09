import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addContact } from "../../redux/contacts/operations";
import {TextField} from "@mui/material";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";

export default function ContactForm() {

  const items = useSelector(selectContacts);

  const initialValues = {
    name: "",
    number: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {

    const isDuplicate = items.some(item => item.number === values.number)
    if(isDuplicate) {
      toast.error("This number already in list!")
      return;
    }

     dispatch(
        addContact({
          name: values.name,
          number: values.number,
        })
      );
      actions.resetForm();
      toast.success("Contact added! 😁")
    };

  const nameFieldId = useId();
  const phoneFieldId = useId();

  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .matches(phoneRegExp, "Invalid phone number")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          type="text"
          name="name"
          placeholder="Enter your name"
          className={css.field}
          id={nameFieldId}
          as={TextField} fullWidth
        />
        <ErrorMessage name="name" component="span" className={css.error} />
        <label htmlFor={phoneFieldId}>Number</label>
        <Field
          type="text"
          name="number"
          placeholder="Enter your phone"
          className={css.field}
          id={phoneFieldId}
          as={TextField} fullWidth
        />
        <ErrorMessage name="number" component="span" className={css.error} />
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
