function Auth(props) {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          _token: props ? "4234234234234234" : null,
          _user: props
            ? {
                firstName: props.firstName,
                lastName: props.lastName,
                email: props.email,
                password: props.password,
                role: "admin",
              }
            : null,
        }),
      1000
    );
  });
}

export default Auth;
