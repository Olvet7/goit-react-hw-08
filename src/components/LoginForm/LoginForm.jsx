import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import { Container, Box, Button } from "@mui/material";

export default function LoginForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
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
            width={200}
            my={4}
            display="flex"
            alignItems="center"
            gap={8}
            p={0}
            sx={{ border: "2px solid grey" , margin: '0 auto'}}
          >
            <Form>
              <label>
                Email
                <Field type="email" name="email" />
              </label>
              <label>
                Password
                <Field type="password" name="password" />
              </label>
              <Button variant="outlined" type="submit" sx={{boxShadow: '0 0 0 0.1rem rgba(0,123,255,.5)', marginTop: "16px"}}>Log In</Button>
            </Form>
          </Box>
        </Formik>
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
