import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Box } from "@mui/material";
import * as yup from "yup";
import { CSSTransition } from "react-transition-group";
import UseAuth from "../Hooks/UseAuth";
import UseDialog from "../Hooks/UseDialog";

function SignInSignUp() {
  const { login } = UseAuth();
  const { closeDialog } = UseDialog();
  const [user, setUser] = useState({
    firstName: " ",
    email: " ",
    password: " ",
  });
  const ref = useRef(null);
  const [signUpIsVisible, setSignUpIsVisible] = useState(true);
  const [signInIsVisible, setSignInIsVisible] = useState(false);

  const updateUser = (values) => {
    setUser({
      firstName: values.firstName,
      email: values.email,
      password: values.password,
    });
    alert("Successfully signing up, sign in now!");
    setSignInIsVisible(true);
  };

  const checkUser = (values) => {
    if (values.email === user.email && values.password === user.password) {
      setSignInIsVisible(false);
      login(user);
      closeDialog();
    } else {
      alert("Unsuccessful");
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Sign Up */}
        <CSSTransition
          in={signUpIsVisible}
          ref={ref}
          timeout={signUpIsVisible ? 1000 : 0}
          unmountOnExit
          classNames="alert"
          onEnter={() => setSignInIsVisible(false)}
          onExit={() => setSignInIsVisible(true)}
        >
          <Box
            sx={{
              border: 1,
              borderRadius: 5,
              width: "45%",
              height: 350,
              backgroundColor: "#d1d9ff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 50,
            }}
          >
            <Formik
              initialValues={{
                email: "",
                firstName: "",
                password: "",
              }}
              validationSchema={yup.object({
                email: yup
                  .string()
                  .email(" Please enter a legit email")
                  .required(" We won't sell your email"),
                firstName: yup
                  .string()
                  .max(15, ` You really have a long name huh, long live`)
                  .required(" Hey, dont you remember your name at birth?"),
                password: yup
                  .string()
                  .required(" Use password generator if you're lazy")
                  .min(
                    8,
                    " Password is too short- should be 8 characters minimum"
                  )
                  .matches(
                    /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
                    " At least one letter, one number and one special character"
                  ),
              })}
              onSubmit={(values) => updateUser(values)}
            >
              <Form>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pt: "5px",
                  }}
                >
                  <label htmlFor="email">Email: </label>
                  <Field name="email" type="email"></Field>
                </Box>
                <ErrorMessage name="email"></ErrorMessage>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pt: "5px",
                  }}
                >
                  <label htmlFor="firstName">First Name: </label>
                  <Field name="firstName" type="text"></Field>
                </Box>
                <ErrorMessage name="firstName"></ErrorMessage>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pt: "5px",
                  }}
                >
                  <label htmlFor="password">Password: </label>
                  <Field name="password" type="password"></Field>
                </Box>
                <ErrorMessage name="password"></ErrorMessage>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-center",
                    alignItems: "center",
                    pt: "5px",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      mb: "5px",
                    }}
                  >
                    Register
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => setSignInIsVisible(true)}
                  >
                    Sign In
                  </Button>
                </Box>
              </Form>
            </Formik>
          </Box>
        </CSSTransition>

        {/* Sign In */}
        <CSSTransition
          in={signInIsVisible}
          ref={ref}
          timeout={signInIsVisible ? 1000 : 0}
          unmountOnExit
          classNames="alert"
          onEnter={() => setSignUpIsVisible(false)}
          onExit={() => setSignUpIsVisible(true)}
        >
          <Box
            sx={{
              border: 1,
              borderRadius: 5,
              width: "45%",
              height: 350,
              backgroundColor: "#ffcccb",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 50,
            }}
          >
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={yup.object({
                email: yup
                  .string()
                  .email(" Please enter a legit email")
                  .required(" Please enter your email"),
                password: yup.string().required(" Please enter your password"),
              })}
              onSubmit={(values) => checkUser(values)}
            >
              <Form>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pt: "5px",
                  }}
                >
                  <label htmlFor="email">Email: </label>
                  <Field name="email" type="email"></Field>
                </Box>
                <ErrorMessage name="email"></ErrorMessage>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pt: "5px",
                  }}
                >
                  <label htmlFor="password">Password: </label>
                  <Field name="password" type="password"></Field>
                </Box>
                <ErrorMessage name="password"></ErrorMessage>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-center",
                    alignItems: "center",
                    pt: "5px",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      mb: "5px",
                    }}
                  >
                    Sign In
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => setSignUpIsVisible(true)}
                  >
                    Create new account
                  </Button>
                </Box>
              </Form>
            </Formik>
          </Box>
        </CSSTransition>
      </Box>
    </>
  );
}

export default SignInSignUp;
