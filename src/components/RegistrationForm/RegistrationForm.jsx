import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import { Container, Box, Button } from "@mui/material";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Box
          // height={200}
          width={200}
          my={18}
          display="flex"
          alignItems="center"
          gap={20}
          p={0}
          
          sx={{ border: "2px solid grey", margin: "0 auto", paddingBottom: "16px" }}
        >
          <Form autoComplete="off">
            <label>
              Username
              <Field type="name" name="name" />
            </label>
            <label>
              Email
              <Field type="email" name="email" />
            </label>
            <label>
              Password
              <Field type="password" name="password" />
            </label>
            <Button variant="outlined" type="submit" sx={{boxShadow: '0 0 0 0.1rem rgba(0,123,255,.5)', marginTop: "16px"}}>Register</Button>
          </Form>
        </Box>
      </Formik>
    </Container>
  );
}
