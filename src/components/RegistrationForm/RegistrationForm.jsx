import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import { Container, Button, TextField} from "@mui/material";
import { Link } from "react-router-dom";

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
      <Form autoComplete="off">
        <Field name="name">
          {({ field }) => (
            <TextField
              {...field}
              id="standard-basic-username"
              label="Username"
              variant="standard"
              fullWidth
            />
          )}
        </Field>

        <Field name="email">
          {({ field }) => (
            <TextField
              {...field}
              id="standard-basic-email"
              label="Email"
              variant="standard"
              fullWidth
            />
          )}
        </Field>

        <Field name="password">
          {({ field }) => (
            <TextField
              {...field}
              id="standard-basic-password"
              label="Password"
              variant="standard"
              type="password"
              fullWidth
            />
          )}
        </Field>

        <Button variant="outlined" type="submit" sx={{marginTop: "20px", height: "20px", borderColor: "var(--accent-color)", color: "var(--accent-color)"}}>
          Register
        </Button>
      </Form>
    </Formik>
    <p>Or <Link to="/login">Login</Link></p>
    </Container>
  );
}


{/* <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Box
          height={200}
          width={200}
          my={18}
          display="flex"
          alignItems="center"
          gap={20}
          p={0}          
          sx={{
            // border: "2px solid grey",
            margin: "0 auto",
            paddingBottom: "16px",
          }}
        >
          <Form autoComplete="on">
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
            <Button
              variant="outlined"
              type="submit"
              sx={{
                boxShadow: "0 0 0 0.1rem rgba(0,123,255,.5)",
                marginTop: "16px",
              }}
            >
              Register
            </Button>
          </Form>
        </Box>
      </Formik> */}
