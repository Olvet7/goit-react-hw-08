import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import { Container, Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <>
      <Container>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Box
            height={200}
            // width={}
            my={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={8}
            p={0}
            sx={{margin: '0 auto'}}
          >
            <Form>
              <label>
                Email
                <Field type="email" name="email" as={TextField} fullWidth/>
              </label>
              <label>
                Password
                <Field type="password" name="password" as={TextField} fullWidth/>
              </label>
              <Button variant="outlined" type="submit" sx={{boxShadow: '0 0 0 0.1rem rgba(0,123,255,.5)', marginTop: "16px", color: "var(--accent-color)", borderColor: "var(--accent-color)", height: "20px"}}>Log In</Button>
            </Form>
          </Box>
        </Formik>
        <p>Or <Link to="/register">Register</Link></p>
        </Container>
    </>
  );
}

// export default function RegistrationForm() {
//   const dispatch = useDispatch();

//   const validationSchema = Yup.object().shape({
//     name: Yup.string()
//       .min(2, "Too Short!")
//       .max(50, "Too Long!")
//       .required("Required"),
//     email: Yup.string().email("Must be a valid email!").required("Required"),
//     password: Yup.string().required("Required"),
//   });

//   const handleSubmit = (values, actions) => {
//     dispatch(register(values))
//     actions.resetForm();
//   };

//   return (
//     <div>
//       <Formik
//         initialValues={{
//           name: "",
//           email: "",
//           password: "",
//         }}
//         onSubmit={handleSubmit}
//         validationSchema={validationSchema}
//       >
//         <Form autoComplete="off">
//           <label>
//             Username
//             <Field type="name" />
//           </label>
//           <label>
//             Email
//             <Field type="email" />
//           </label>
//           <label>
//             Password
//             <Field type="password" />
//           </label>

//         </Form>
//       </Formik>
//     </div>
//   );
// }
