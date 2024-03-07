import React from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";

const Login = () => {
  const [login, setLogin] = React.useState(true);

  const toggleLogin = () => {
    setLogin(!login);
  };

  return (
    <Container component={"main"} maxWidth="xs" sx={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {login ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form action="" style={
              {
                width: "100%",
                marginTop: "1rem",
              }
            } >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              />
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>
              <Typography textAlign={"center"} >or</Typography>
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="text"
                onClick={toggleLogin}
                fullWidth
              >
                Sign up instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Register</Typography>
            <form action="">
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="name"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="bio"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              />
              
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Register
              </Button>
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="text"
                onClick={toggleLogin}
                fullWidth
              >
                Back to Login
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
