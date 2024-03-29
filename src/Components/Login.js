import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { MenuItem, Select } from "@mui/material";
import { authActions } from "../store/index";
import { useDispatch } from "react-redux";
// const defaultTheme = createTheme();
// const settings = ["Profile", "Logout"];
// const email = "bbhagyashri780@gmail.com";
export default function Login() {
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authActions.login());

    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    // console.log(data,"data");
    // console.log(data.get("email"));
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.get("email"))) {
      setEmailError("Please enter valid email address");
      return;
    }
    setEmailError("");

    if (data.get("password").length < 6) {
      console.log(data.get("password").length);
      setPasswordError("Please enter atleast six digit password");
      return;
    }
    setPasswordError("");

    naviagte("/dashboard");

    if (
      data.get("email") == "bbhagyashri780@gmail.com" &&
      data.get("password") == "123456"
    ) {
      naviagte("/dashboard");
    } else {
      alert("Please Enter Correct Credentials");
      emailRef.current.value = "";
      passwordRef.current.value = "";
      naviagte("/login");
      console.log("redirect to login");
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const Navigate = useNavigate();

  const naviagtetologin = () => {
    Navigate("/login");
    console.log("naviagte to login page");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "0ch" }}
          >
            Welcome To WebSite
          </Typography>
          <Select
            sx={{ marginLeft: "1ch" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value=""
            label="Login"
            onClick={naviagtetologin}
          >
            <MenuItem>Sign In</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
      <form onSubmit={handleSubmit}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 1, bgcolor: "secondary.main", marginLeft: "3ch" }}
            ></Avatar>
            <Typography component="h1" variant="h5" sx={{ marginLeft: "2ch" }}>
              Sign in
            </Typography>

            <FormControl
              sx={{ m: 1, width: "35ch", marginLeft: "8ch", marginTop: "3ch" }}
              variant="standard"
            >
              <TextField
                id="input-with-icon-textfield"
                label="Email Address"
                name="email"
                required
                type="email"
                inputRef={emailRef}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                helperText={emailError}
                error={Boolean(emailError)}
              />
            </FormControl>

            <FormControl
              sx={{ m: 1, width: "35ch", marginLeft: "8ch" }}
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                name="password"
                inputRef={passwordRef}
                required
                variant="standard"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                helperText={passwordError}
                error={Boolean(passwordError)}
              />
              {passwordError}
            </FormControl>

            <FormControl
              sx={{ m: 1, width: "40ch", marginLeft: "6ch", mt: 5 }}
              variant="standard"
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2 }}
              >
                Sign In
              </Button>
            </FormControl>
          </Box>
        </Container>
      </form>
    </Box>
  );
}
{
  /* <FormControl
               sx={{ m: 1, width: "35ch", marginLeft: "8ch", marginTop: "3ch" }}
               variant="standard"
          >
             <TextField
                id="input-with-icon-textfield"
                 label="Password"
                 name="password"
                 required
                 type="password"
                 inputRef={passwordRef}
                 InputProps={{
                   startAdornment: (
                     <InputAdornment position="start">
                     <AccountCircle />
                    </InputAdornment>
                   ),
                 }}
                 variant="standard"
                 helperText={passwordError}
                 error={Boolean(passwordError)}
               />
             </FormControl>  */
}
